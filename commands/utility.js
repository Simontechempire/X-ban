module.exports = {
    name: "utility",
    aliases: ["utils", "utilitymenu"],
    description: "Show the utility command menu",
    category: "Utility",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x utility 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃      🧰 UTILITY MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x calculator
┃ 02. x translate
┃ 03. x weather
┃ 04. x time
┃ 05. x uptime
┃ 06. x ping
┃ 07. x qr
┃ 08. x shorten
┃ 09. x dictionary
┃ 10. x unit
┗━━━━━━━━━━━━━❥❥❥

> _🧰 Reply with a command to use it_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
