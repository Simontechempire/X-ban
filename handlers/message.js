const config = require('../config');

const commands = {
    ping: require('../commands/ping'),
    menu: require('../commands/menu'),
    owner: require('../commands/owner'),
    moderator: require('../commands/moderator'),
    group: require('../commands/group'),
    admin: require('../commands/admin'),
    fun: require('../commands/fun'),
    games: require('../commands/game'),
    game: require('../commands/game'),
    media: require('../commands/media'),
    tools: require('../commands/tools'),
    utility: require('../commands/utility'),
    download: require('../commands/downloader'),
    downloader: require('../commands/downloader'),
    sticker: require('../commands/sticker'),
    ai: require('../commands/ai'),
    info: require('../commands/info'),
    viewonce: require('../commands/viewonce'),
    vv: require('../commands/viewonce')
};

async function handleMessage(sock, { messages }) {
    const m = messages[0];

    if (!m || !m.message || m.key.fromMe) return;

    const from = m.key.remoteJid;

    const text =
        m.message.conversation ||
        m.message.extendedTextMessage?.text ||
        m.message.imageMessage?.caption ||
        m.message.videoMessage?.caption ||
        '';

    const prefix = config.prefix || 'x';

    if (!text.toLowerCase().startsWith(prefix.toLowerCase())) {
        return;
    }

    const input = text.slice(prefix.length).trim();

    if (!input) return;

    const parts = input.split(/\s+/);
    const commandName = parts.shift().toLowerCase();
    const args = parts;

    const command = commands[commandName];

    if (!command) return;

    try {
        await command.execute(sock, m, args, config);
    } catch (error) {
        console.error(`Command error [${commandName}]:`, error);

        await sock.sendMessage(from, {
            text: `❌ Error while executing *${prefix}${commandName}*`
        });
    }
}

module.exports = {
    handleMessage
};
