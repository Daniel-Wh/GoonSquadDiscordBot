require("dotenv").config();
const { Client } = require("discord.js");

const bot = new Client();
bot.login(process.env.CS_BOT_TOKEN);

bot.on("ready", () => {
  console.log(`I have awoken as ${bot.user.tag}, in ${bot.channels}`);
});

bot.on("message", async (message) => {
  const PREFIX = "!";
  const POSTFIX = "see";
  if (message.author.bot) {
    return;
  }

  if (message.content.indexOf(PREFIX) !== 0) {
    return;
  }
  if (message.content.indexOf(PREFIX) == 0) {
    const msg = message.content.substring(1);
    let [...args] = msg.split(/\s+/);
    // avoid index out of bounds
    if (args.length < 2) {
      message.reply(
        "aye bruh, you need an actual command. Quit wasting my time, douche"
      );
    }

    const botName = args[0].toLowerCase;
    const command = args[1].toLowerCase;
    if (botName !== POSTFIX) {
      console.log(`This message wasn't for the bot ${botName}`);
      return;
    }

    console.log(`${message.content} was sent by ${message.author.username}`);
    // command switch cases below for separate commands
    switch (command) {
    }
  }
});
