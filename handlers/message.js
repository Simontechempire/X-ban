const config = require('../config');
const ping = require('../commands/ping');
const menu = require('../commands/menu');
const owner = require('../commands/owner');

async function handleMessage(sock, { messages }) {
  const m = messages[0];
  if (!m.message || m.key.fromMe) return;

  const from = m.key.remoteJid;
  const text =
    m.message.conversation ||
    m.message.extendedTextMessage?.text ||
    '';

  if (!text.startsWith(config.prefix)) return;

  const args = text.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'ping':
      await ping(sock, m, from);
      break;
    case 'menu':
    case 'help':
      await menu(sock, m, from);
      break;
    case 'owner':
      await owner(sock, m, from);
      break;
    default:
      break;
  }
}

module.exports = { handleMessage };
