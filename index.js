const { startBot } = require('./lib/connect');
const config = require('./config');

console.log(`Starting ${config.botName}...`);

startBot().catch((err) => {
  console.error('Failed to start bot:', err);
  process.exit(1);
});
