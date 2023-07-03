const { GatewayIntentBits } = require('discord.js');

const {
  Guilds,
  GuildMessages,
  MessageContent
} = GatewayIntentBits;

module.exports = [Guilds, GuildMessages, MessageContent]