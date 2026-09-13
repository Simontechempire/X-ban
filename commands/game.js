module.exports = {
    name: "games",
    aliases: ["game", "gamesmenu"],
    description: "Show the games command menu",
    category: "Games",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x games 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃      🎮 GAMES MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x truth
┃ 02. x dare
┃ 03. x quiz
┃ 04. x riddle
┃ 05. x tictactoe
┃ 06. x 8ball
┃ 07. x dice
┃ 08. x coinflip
┃ 09. x slots
┃ 10. x trivia
┃ 11. x scramble
┃ 12. x guess
┃ 13. x mathgame
┃ 14. x wordgame
┃ 15. x hangman
┃ 16. x memory
┃ 17. x reaction
┃ 18. x number
┃ 19. x emoji
┃ 20. x anagram
┃ 21. x jackpot
┃ 22. x blackjack
┃ 23. x higherlower
┃ 24. x rockpaper
┃ 25. x battle
┃ 26. x duel
┃ 27. x lottery
┃ 28. x challenge
┃ 29. x leaderboard
┃ 30. x dailygame
┗━━━━━━━━━━━━━❥❥❥

> _🎮 Reply with a command to play_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
