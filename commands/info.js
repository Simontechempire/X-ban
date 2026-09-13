module.exports = {
    name: "info",
    aliases: ["botinfo", "about"],
    description: "Show bot information",
    category: "Info",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x info 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃       ℹ️ INFO MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x botinfo
┃ 02. x owner
┃ 03. x version
┃ 04. x uptime
┃ 05. x ping
┃ 06. x status
┃ 07. x runtime
┃ 08. x system
┃ 09. x server
┃ 10. x help
┗━━━━━━━━━━━━━❥❥❥

> _ℹ️ Bot information_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
