const { Client, Partials  } = require('discord.js');
const botIntents = require('./intents');
const express = require('express');

const app = express();
app.all('/', (req, res) => {
  res.send('Bot is running')
})

const client = new Client({
  intents: botIntents,
  partials: [Partials.Channel],
});

client.on('ready', () => {
  console.log('Logged in as ' + client.user.tag);
});

client.on('messageCreate', (msg) => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith('!')) return;

  if (msg.content === '!say-hello') {
    return msg.reply(`Hello ${msg.author.username}`);
  } else if (msg.content === '!tell-a-joke') {
    return msg.reply("JavaScript isn't funny")
  }
})

client.login(process.env.DISCORD_TOKEN);

app.listen(process.env.PORT || 5000, () => console.log('app is running on port 5000'))