module.exports = {
    name: "fun",
    aliases: ["funmenu"],
    description: "Show the fun command menu",
    category: "Fun",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x fun 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃       🧪 FUN MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x joke
┃ 02. x meme
┃ 03. x quote
┃ 04. x ship
┃ 05. x love
┃ 06. x roast
┃ 07. x compliment
┃ 08. x truth
┃ 09. x dare
┃ 10. x 8ball
┃ 11. x pickup
┃ 12. x flirt
┃ 13. x rate
┃ 14. x howgay
┃ 15. x howcute
┃ 16. x howhot
┃ 17. x character
┃ 18. x personality
┃ 19. x compatibility
┃ 20. x marry
┃ 21. x hug
┃ 22. x kiss
┃ 23. x slap
┃ 24. x pat
┃ 25. x highfive
┃ 26. x kill
┃ 27. x simp
┃ 28. x troll
┃ 29. x fact
┃ 30. x random
┗━━━━━━━━━━━━━❥❥❥

> _🧪 Reply with a command to have fun_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
