module.exports = {
    name: "download",
    aliases: ["dl", "downloader"],
    description: "Show the download command menu",
    category: "Download",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x download 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃     📥 DOWNLOAD MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x play
┃ 02. x song
┃ 03. x video
┃ 04. x yt
┃ 05. x ytmp3
┃ 06. x ytmp4
┃ 07. x tiktok
┃ 08. x instagram
┃ 09. x facebook
┃ 10. x twitter
┗━━━━━━━━━━━━━❥❥❥

> _📥 Reply with a command to download_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
