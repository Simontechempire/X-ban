module.exports = {
    name: "media",
    aliases: ["med", "mediamenu"],
    description: "Show the media command menu",
    category: "Media",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x media 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃      🎬 MEDIA MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x sticker
┃ 02. x toimg
┃ 03. x tomp3
┃ 04. x toaudio
┃ 05. x tovideo
┃ 06. x resize
┃ 07. x crop
┃ 08. x enhance
┃ 09. x blur
┃ 10. x caption
┃ 11. x removebg
┃ 12. x emojimix
┃ 13. x take
┃ 14. x circle
┃ 15. x mirror
┃ 16. x rotate
┃ 17. x flip
┃ 18. x compress
┃ 19. x gif
┃ 20. x mp4
┗━━━━━━━━━━━━━❥❥❥

> _🎬 Reply with a command to use it_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
