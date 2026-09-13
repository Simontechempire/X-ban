module.exports = {
    name: "ai",
    aliases: ["ask", "chat", "gpt"],
    description: "Show the AI command menu",
    category: "AI",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x ai 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃       🤖 AI MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x ai
┃ 02. x ask
┃ 03. x chat
┃ 04. x gpt
┃ 05. x imagine
┃ 06. x vision
┃ 07. x summarize
┃ 08. x translate
┃ 09. x rewrite
┃ 10. x code
┗━━━━━━━━━━━━━❥❥❥

> _🤖 Reply with a command to use it_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
