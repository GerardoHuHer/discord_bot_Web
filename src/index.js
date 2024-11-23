const { Client, IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, IntegrationApplication, ActivityType } = require("discord.js");
require("dotenv").config();
const token = process.env.TOKEN;
const mongoose = require("mongoose");

const eventHandler = require("../src/handlers/eventHandler");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildPresences,
    IntentsBitField.Flags.MessageContent,

  ]
});


client.on("messageCreate", (msg) => {
  if (msg.author.bot){
    return;
  }
  if(msg.content === "hello"){
    msg.reply("Hey!")
  }
});
(async () => {
  try {
    
    eventHandler(client);
    await mongoose.connect(process.env.DB,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } );
    console.log("You are connected to a mongo data base");
  } catch (error) {
    console.log("There was an error: ", error);
  }
})();



client.login(token);
