module.exports = {
    name: "viewonce",
    aliases: ["vv", "vvo", "view", "retrieve", "getmedia"],
    description: "Show the View Once command menu",
    category: "View Once",

    async execute(sock, m, args, config) {
        const text = `
┏━━━━━━━━━━━━━❥❥❥
┃      👁️ VIEW ONCE
┗━━━━━━━━━━━━━❥❥❥

┃ 01. x viewonce
┃ 02. x vv
┃ 03. x vvo
┃ 04. x view
┃ 05. x retrieve
┃ 06. x getmedia
┃ 07. x vvinfo
┃ 08. x vvstatus
┃ 09. x vvhelp
┃ 10. x vvsettings

┗━━━━━━━━━━━━━❥❥❥
`;

        await sock.sendMessage(m.key.remoteJid, {
            text
        });
    }
};
