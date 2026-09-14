const fs = require('fs');
const path = require('path');
const config = require('../config');

const commands = {};

// Automatically load commands
const commandsPath = path.join(__dirname, '../commands');

for (const file of fs.readdirSync(commandsPath)) {
    if (!file.endsWith('.js')) continue;

    try {
        const command = require(path.join(commandsPath, file));

        if (!command || !command.name || typeof command.execute !== 'function') {
            console.warn(`⚠️ Skipping invalid command file: ${file}`);
            continue;
        }

        // Main command
        commands[command.name.toLowerCase()] = command;

        // Aliases
        if (Array.isArray(command.aliases)) {
            for (const alias of command.aliases) {
                commands[alias.toLowerCase()] = command;
            }
        }

        console.log(`✅ Loaded command: ${command.name}`);
    } catch (error) {
        console.error(`❌ Failed to load ${file}:`, error.message);
    }
}

async function handleMessage(sock, { messages }) {
    const m = messages?.[0];

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
        console.error(
            `❌ Command error [${commandName}]:`,
            error
        );

        await sock.sendMessage(from, {
            text: `❌ Error while executing *${prefix}${commandName}*`
        });
    }
}

module.exports = {
    handleMessage
};
