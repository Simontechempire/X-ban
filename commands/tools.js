module.exports = {
    name: "tools",
    aliases: ["tool", "toolsmenu"],
    description: "Show the tools command menu",
    category: "Tools",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x tools 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃      🛠️ TOOLS MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x calculator
┃ 02. x translate
┃ 03. x weather
┃ 04. x time
┃ 05. x qr
┃ 06. x qrcode
┃ 07. x shorten
┃ 08. x screenshot
┃ 09. x dictionary
┃ 10. x password
┃ 11. x uuid
┃ 12. x base64
┃ 13. x encode
┃ 14. x decode
┃ 15. x binary
┃ 16. x text
┃ 17. x reverse
┃ 18. x count
┃ 19. x convert
┃ 20. x timezone
┗━━━━━━━━━━━━━❥❥❥

> _🛠️ Reply with a command to use it_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
