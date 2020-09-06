require("dotenv").config();
const fs = require("fs");
const { Client, MessageAttachment, ReactionCollector } = require("discord.js");
const { Console } = require("console");

const bot = new Client();
bot.login(process.env.CS_BOT_TOKEN);

bot.on("ready", () => {
  console.log(`I have awoken as ${bot.user.tag}, in ${bot.guilds.toString()}`);
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
    } else {
      const botName = args[0].toLowerCase();
      const command = args[1].toLowerCase();
      console.log(command);
      if (botName !== POSTFIX) {
        console.log(`This message wasn't for the bot ${botName}`);
        return;
      }
      // console.log(`${message.content} was sent by ${message.author.username}`);
      // command switch cases below for separate commands
      switch (command) {
        case "approve":
          approveRespond(message, "approves.txt");
          break;
        case "approves":
          approveRespond(message, "approves.txt");
          break;
        case "disapproves":
          disapproveRespond(message, "disapproves.txt");
          break;
        case "disapprove":
          disapproveRespond(message, "disapproves.txt");
          break;
        case "mafia":
          const time = 60000;
          message.channel
            .send(
              "Alright, lets get started for mafia. Ya'll hoes got 60 seconds to react to this message. Then check your dm's for your role"
            )
            .then(async function (message) {
              await message.react("");

              const collector = message.createReactionCollector(filter, {
                time: time,
              });

              collector.on("collect", (reaction, ReactionCollector) => {
                console.log(reaction);
                console.log(ReactionCollector);
              });
            });

          console.log("see is mafia");
          break;
      }
    }
  }
});

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
    } else if (arr[num].split(" ")[0] === "YOU") {
      message.channel.send(arr[num]);
      message.channel.send({ files: ["./img/chuck.gif"] });
    } else {
      message.channel.send(arr[num]);
    }
  });
};

const disapproveRespond = (message, file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.log(err);
    }
    const arr = data.toString().split("\n");
    const num = Math.floor(Math.random() * arr.length);
    const filemsg = arr[num].split(" ");
    console.log(filemsg[0]);
    if (filemsg[0] == "Ahaha,") {
      message.channel.send("LOL, you tried", {
        files: ["./img/ahaha.gif"],
      });
    } else {
      message.channel.send(arr[num]);
    }
  });
};
