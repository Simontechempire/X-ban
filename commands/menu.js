module.exports = {
    name: "menu",
    aliases: ["help", "allmenu"],
    description: "Show the main menu",
    category: "Main",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x menu 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃     🏠 MAIN MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 🛡️ Moderator Menu
┃ 👑 Owner Menu
┃ 🎮 Games Menu
┃ 🎬 Media Menu
┃ 🛠️ Tools Menu
┃ ⚙️ Settings Menu
┃ 🤖 Auto Menu
┃ 👤 User Menu
┃ 🤖 AI Menu
┃ 📥 Download Menu
┃ 🎵 Music Menu
┃ 🔍 Search Menu
┃ 👥 Group Menu
┃ 📊 Statistics Menu
┃ ℹ️ Info Menu
┃ ❤️ Support Menu
┃ 🔐 Security Menu
┃ 🧪 Fun Menu
┃ 🏆 Rank Menu
┃ 🚀 Premium Menu
┃ 💻 Developer Menu
┃ 👁️ View Once Menu
┗━━━━━━━━━━━━━❥❥❥
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
