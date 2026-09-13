const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
} = require('@whiskeysockets/baileys');

const pino = require('pino');
const config = require('../config');
const { handleMessage } = require('../handlers/message');

let reconnecting = false;

async function startBot() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState(
            config.sessionFolder
        );

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

        // Pairing code
        if (!sock.authState.creds.registered) {
            if (!config.phoneNumber) {
                console.log('❌ Please set PHONE_NUMBER in .env');
                process.exit(1);
            }

            setTimeout(async () => {
                try {
                    const code = await sock.requestPairingCode(
                        config.phoneNumber
                    );

                    console.log('\n=================================');
                    console.log(`🔗 Pairing Code: ${code}`);
                    console.log(`📱 Number: ${config.phoneNumber}`);
                    console.log(
                        '📲 WhatsApp → Linked Devices → Link with phone number'
                    );
                    console.log('=================================\n');
                } catch (err) {
                    console.error(
                        '❌ Failed to request pairing code:',
                        err.message
                    );
                }
            }, 2000);
        }

        // Save authentication credentials
        sock.ev.on('creds.update', saveCreds);

        // Connection updates
        sock.ev.on('connection.update', async (update) => {
            const { connection, lastDisconnect } = update;

            if (connection === 'open') {
                reconnecting = false;

                console.log(
                    `✅ ${config.botName} is online and ready!`
                );
            }

            if (connection === 'close') {
                const statusCode =
                    lastDisconnect?.error?.output?.statusCode;

                const shouldReconnect =
                    statusCode !== DisconnectReason.loggedOut;

                console.log(
                    `❌ Connection closed. Status: ${statusCode}`
                );

                if (shouldReconnect && !reconnecting) {
                    reconnecting = true;

                    console.log('🔄 Reconnecting...');

                    setTimeout(() => {
                        startBot().catch((err) => {
                            console.error(
                                '❌ Reconnection failed:',
                                err.message
                            );
                            reconnecting = false;
                        });
                    }, 3000);
                } else if (!shouldReconnect) {
                    console.log(
                        '🚪 Logged out. Delete auth_info and restart to pair again.'
                    );
                }
            }
        });

        // Incoming messages
        sock.ev.on('messages.upsert', async (messageUpdate) => {
            try {
                await handleMessage(sock, messageUpdate);
            } catch (err) {
                console.error(
                    '❌ Message handler error:',
                    err.message
                );
            }
        });

        return sock;

    } catch (err) {
        console.error('❌ Failed to start bot:', err);
        throw err;
    }
}

module.exports = {
    startBot
};
