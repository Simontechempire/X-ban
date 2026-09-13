module.exports = {
    name: "admin",
    aliases: ["admins"],
    description: "Show the admin command menu",
    category: "Admin",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x admin 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃      🛡️ ADMIN MENU
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
┃ 29. x setrules
┃ 30. x rules
┃ 31. x welcome
┃ 32. x goodbye
┃ 33. x setwelcome
┃ 34. x setgoodbye
┃ 35. x blacklist
┃ 36. x unblacklist
┃ 37. x whitelist
┃ 38. x unwhitelist
┃ 39. x approve
┃ 40. x requests
┃ 41. x open
┃ 42. x close
┃ 43. x groupmute
┃ 44. x groupunmute
┃ 45. x grouplock
┃ 46. x groupunlock
┃ 47. x report
┃ 48. x modlog
┃ 49. x activity
┃ 50. x adminhelp
┗━━━━━━━━━━━━━❥❥❥

> _🛡️ Admin commands are restricted to group administrators_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
