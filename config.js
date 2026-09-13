require('dotenv').config();

module.exports = {
    botName: process.env.BOT_NAME || 'X Ban',

    // Bot command prefix
    prefix: process.env.PREFIX || 'x',

    // WhatsApp number used for pairing
    phoneNumber: process.env.PHONE_NUMBER,

    // Owner's WhatsApp number
    ownerNumber: process.env.OWNER_NUMBER,

    // Session storage
    sessionFolder: process.env.SESSION_FOLDER || './auth_info',

    // Owner JID
    ownerJid: process.env.OWNER_NUMBER
        ? process.env.OWNER_NUMBER.replace(/\D/g, '') + '@s.whatsapp.net'
        : null
};
