module.exports = {
    name: "sticker",
    aliases: ["s", "stickerwm"],
    description: "Show the sticker command menu",
    category: "Sticker",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x sticker 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃      🎨 STICKER MENU
┗━━━━━━━━━━━━━❥❥❥

┃ 01. x sticker
┃ 02. x s
┃ 03. x stickerwm
┃ 04. x take
┃ 05. x steal
┃ 06. x toimg
┃ 07. x tomeme
┃ 08. x attp
┃ 09. x tgs
┃ 10. x emojimix

> _🎨 Send/reply to media with a sticker command_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
