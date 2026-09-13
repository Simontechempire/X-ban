require('dotenv').config();

module.exports = {
  botName: process.env.BOT_NAME || 'X Ban',
  prefix: process.env.PREFIX || '.',
  phoneNumber: process.env.PHONE_NUMBER,
  ownerNumber: process.env.OWNER_NUMBER,
  sessionFolder: process.env.SESSION_FOLDER || './auth_info',
  ownerJid: process.env.OWNER_NUMBER
    ? process.env.OWNER_NUMBER.replace(/\D/g, '') + '@s.whatsapp.net'
    : null,
};
