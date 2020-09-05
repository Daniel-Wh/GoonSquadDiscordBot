require("dotenv").config();
const fs = require("fs");
const { Client, MessageAttachment } = require("discord.js");

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
          // some code for what see approves
          console.log("got command see approves");
          fs.readFile("approves.txt", (err, data) => {
            if (err) {
              console.log(err);
            }
            const arr = data.toString().split("\n");
            const num = Math.floor(Math.random() * arr.length);
            message.channel.send(arr[num]);
            console.log(arr[num]);
          });

          break;
        case "approves":
          fs.readFile("approves.txt", (err, data) => {
            if (err) {
              console.log(err);
            }
            const arr = data.toString().split("\n");
            const num = Math.floor(Math.random() * arr.length);
            message.channel.send(arr[num]);
            console.log(arr[num]);
          });

          console.log("got command approves");
          break;
        case "disapproves":
          fs.readFile("disapproves.txt", (err, data) => {
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

          // some code for what see disaproves of
          console.log("see disapproves");
          break;
        case "disapprove":
          fs.readFile("disapproves.txt", (err, data) => {
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
          console.log("see disapproves");
          break;
        case "mafia":
          // set up the mafia game
          console.log("see is mafia");
          break;
      }
    }
  }
});
