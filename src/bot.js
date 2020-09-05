require("dotenv").config();
const { Client } = require("discord.js");

const bot = new Client();
bot.login(process.env.CS_BOT_TOKEN);
