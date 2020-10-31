require("dotenv").config();
const fs = require("fs");
const {
  Client,
  MessageAttachment,
  ReactionCollector,
  UserFlags,
  Collection,
  DMChannel,
  Guild,
} = require("discord.js");
const { Console } = require("console");

const bot = new Client();
bot.login(process.env.GOON_BOT_TOKEN);

bot.on("ready", () => {
  console.log(`I have awoken as ${bot.user.tag}, in ${bot.guilds.toString()}`);
});

bot.on("message", async (message) => {
  const PREFIX = "!";
  const POSTFIX = "goon";
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
        "aye bruh, you need an actual command. Quit wasting my time, douche",
        {tts: true}
      );
    } else {
      const botName = args[0].toLowerCase();
      const command = args[1].toLowerCase();
      if (botName !== POSTFIX) {
        console.log(`This message wasn't for the bot ${botName}`);
        return;
      }
      // console.log(`${message.content} was sent by ${message.author.username}`);
      // command switch cases below for separate commands
      switch (command) {
        case "ism":
          approveRespond(message, "goonisms.txt");
          break;
        case "isms":
          approveRespond(message, "goonisms.txt");
          break;
        case "jester":
          jesterGenerator(message);
          break;
      }
    }
  }
});

const jesterGenerator = (message) => {
  const time = 30000;
  userIDs = [];
  const filter = (reaction, user) => {
    if (reaction.emoji) userIDs.push(user.id);
  };
  message.channel
    .send(
      "Alright, lets get started for jester. Ya'll hoes got 30 seconds to react to this message. Then check your dm's for your role, you can't fuck this up"
    )
    .then(
      (message) => {
        message.awaitReactions(filter, { time }).then(() => {
          let jester = Math.floor(Math.random() * userIDs.length);
          userIDs.forEach((user, index) => {
            dmUser = message.guild.members.cache.get(user);
            if (index == jester) {
              dmUser.send("You're jester motherfucker, good luck.");
            } else {
              dmUser.send("You're not jester, good luck");
            }
          });
        });
      },
      (error) => console.log(error)
    );
};

const approveRespond = (message, file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log(err);
    }
    const arr = data.toString().split("\n");
    const num = Math.floor(Math.random() * arr.length);
    if (arr[num] == "salute") {
      message.channel.send({
        files: ["./img/salute.gif"],
      });
    } else if (arr[num].split(" ")[0] === "Some") {
      message.channel.send(arr[num], {tts: true});
      message.channel.send({ files: ["./img/bird.jpg"] });
    } else if (arr[num].split(" ")[0] === "IT'S"){
      message.channel.send(arr[num], {tts: true});
      message.channel.send({ files: ["./img/ahaha.gif"] });
    } 
    else {
      message.channel.send(arr[num], {tts: true});
    }
  });
};

