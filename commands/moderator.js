module.exports = {
    name: "moderator",
    aliases: ["mod", "mods"],
    description: "Show the moderator command menu",
    category: "Moderator",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x moderator 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃    🛡️ MODERATOR MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x ban
┃ 02. x unban
┃ 03. x kick
┃ 04. x mute
┃ 05. x unmute
┃ 06. x warn
┃ 07. x unwarn
┃ 08. x warnings
┃ 09. x clearwarn
┃ 10. x del
┃ 11. x purge
┃ 12. x pin
┃ 13. x unpin
┃ 14. x promote
┃ 15. x demote
┃ 16. x admins
┃ 17. x groupinfo
┃ 18. x userinfo
┃ 19. x id
┃ 20. x tagall
┃ 21. x hidetag
┃ 22. x antilink
┃ 23. x antiword
┃ 24. x antispam
┃ 25. x antiflood
┃ 26. x lock
┃ 27. x unlock
┃ 28. x slowmode
┃ 29. x report
┃ 30. x modlog
┃ 31. x setrules
┃ 32. x rules
┃ 33. x welcome
┃ 34. x goodbye
┃ 35. x setwelcome
┃ 36. x setgoodbye
┃ 37. x blacklist
┃ 38. x unblacklist
┃ 39. x blacklistlist
┃ 40. x whitelist
┃ 41. x unwhitelist
┃ 42. x whitelistlist
┃ 43. x approve
┃ 44. x disapprove
┃ 45. x requests
┃ 46. x close
┃ 47. x open
┃ 48. x groupmute
┃ 49. x groupunmute
┃ 50. x modhelp
┗━━━━━━━━━━━━━❥❥❥

> _🛡️ Moderator commands_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text: text
        });
    }
};
