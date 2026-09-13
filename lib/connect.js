const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
} = require('@whiskeysockets/baileys');
const pino = require('pino');
const config = require('../config');
const { handleMessage } = require('../handlers/message');

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState(config.sessionFolder);
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: false,
    logger: pino({ level: 'silent' }),
    browser: [config.botName, 'Chrome', '1.0.0'],
    generateHighQualityLinkPreview: true,
    syncFullHistory: false,
  });

  // Pairing code (best for Railway / Render)
  if (!sock.authState.creds.registered) {
    if (!config.phoneNumber) {
      console.log('❌ Please set PHONE_NUMBER in .env');
      process.exit(1);
    }

    setTimeout(async () => {
      try {
        const code = await sock.requestPairingCode(config.phoneNumber);
        console.log('\n=================================');
        console.log(`🔗 Pairing Code: ${code}`);
        console.log(`Number: ${config.phoneNumber}`);
        console.log('Open WhatsApp → Linked Devices → Link with phone number');
        console.log('=================================\n');
      } catch (err) {
        console.error('Failed to request pairing code:', err);
      }
    }, 2000);
  }

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') {
      const statusCode = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      console.log('Connection closed. Status:', statusCode, '| Reconnecting:', shouldReconnect);

      if (shouldReconnect) {
        startBot();
      } else {
        console.log('Logged out. Delete auth_info folder and restart to pair again.');
      }
    } else if (connection === 'open') {
      console.log(`✅ ${config.botName} is online and ready!`);
    }
  });

  // Pass all messages to the handler
  sock.ev.on('messages.upsert', async (m) => {
    try {
      await handleMessage(sock, m);
    } catch (err) {
      console.error('Message handler error:', err);
    }
  });

  return sock;
}

module.exports = { startBot };
