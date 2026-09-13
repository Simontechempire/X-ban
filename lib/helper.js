const config = require('../config');

function isOwner(jid) {
  return jid === config.ownerJid;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  isOwner,
  sleep,
};
