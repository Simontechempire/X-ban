module.exports = {
    name: "group",
    aliases: ["grp", "groups"],
    description: "Show the group command menu",
    category: "Group",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x group 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━━━━━❥❥❥
┃       👥 GROUP MENU
┗━━━━━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━━━━━❥❥❥
┃ 01. x add
┃ 02. x remove
┃ 03. x promote
┃ 04. x demote
┃ 05. x ban
┃ 06. x unban
┃ 07. x mute
┃ 08. x unmute
┃ 09. x warn
┃ 10. x warnings
┃ 11. x clearwarn
┃ 12. x tagall
┃ 13. x hidetag
┃ 14. x tagadmin
┃ 15. x groupinfo
┃ 16. x grouplink
┃ 17. x resetlink
┃ 18. x setname
┃ 19. x setdesc
┃ 20. x setphoto
┃ 21. x delphoto
┃ 22. x setwelcome
┃ 23. x setgoodbye
┃ 24. x welcome
┃ 25. x goodbye
┃ 26. x antilink
┃ 27. x antispam
┃ 28. x lock
┃ 29. x unlock
┃ 30. x grouphelp
┗━━━━━━━━━━━━━━━━━❥❥❥

> _👥 Reply with a command to use it_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
