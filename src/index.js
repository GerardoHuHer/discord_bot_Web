const {Client, IntentsBitField} = require("discord.js");
require("dotenv").config();
const token = process.env.TOKEN;

const client  = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
});

client.on("interactionCreate", (interaction) => {
  if(!interaction.isChatInputCommand()) return;
  if(interaction.commandName === "hey"){
    interaction.reply("Hey!")
  }

  if(interaction.commandName === "ping"){
    interaction.reply("pong")
  }
  if(interaction.commandName === "add"){
    const num1 = interaction.options.get("first-number")?.value
    const num2 = interaction.options.get("second-number")?.value
    interaction.reply(`The sum is: ${num1 + num2}`)
  }
})

client.login(token);
