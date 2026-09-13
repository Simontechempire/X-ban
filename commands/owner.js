module.exports = {
    name: "owner",
    aliases: ["own", "owners"],
    description: "Show the owner command menu",
    category: "Owner",

    async execute(sock, m, args, config) {
        const text = `
🌍⃝⃘‌‌‌━⋆─⋆──❂
┊ ┊ ┊ ┊ ┊
┊ ┊ ✫ ˚㋛ ⋆｡ ❀
┊ ☠︎︎
✧  x owner 𓂃✍︎𝄞
╰────────────────❂

┏━━━━━━━━━━━━━❥❥❥
┃      👑 OWNER MENU
┗━━━━━━━━━━━━━❥❥❥

┏━━━━━━━━━━━━━❥❥❥
┃ 01. x broadcast
┃ 02. x addowner
┃ 03. x delowner
┃ 04. x ownerlist
┃ 05. x addmod
┃ 06. x delmod
┃ 07. x modlist
┃ 08. x setprefix
┃ 09. x resetprefix
┃ 10. x setname
┃ 11. x setbio
┃ 12. x setstatus
┃ 13. x setpp
┃ 14. x delpp
┃ 15. x block
┃ 16. x unblock
┃ 17. x blocklist
┃ 18. x join
┃ 19. x leave
┃ 20. x restart
┃ 21. x shutdown
┃ 22. x update
┃ 23. x maintenance
┃ 24. x public
┃ 25. x self
┃ 26. x setlog
┃ 27. x getlog
┃ 28. x backup
┃ 29. x restore
┃ 30. x dbinfo
┃ 31. x userlist
┃ 32. x groupstats
┃ 33. x botstats
┃ 34. x plugins
┃ 35. x reload
┃ 36. x ownerpanel
┗━━━━━━━━━━━━━❥❥❥

> _👑 Owner commands_
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
