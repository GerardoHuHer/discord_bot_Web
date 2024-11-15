
const { Client, IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, IntegrationApplication, ActivityType } = require("discord.js");
require("dotenv").config();
const token = process.env.TOKEN;
const eventHandler = require("../src/handlers/eventHandler");


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

// let status = [
//   {
//     name: "WebBot is watching you!",
//     type: ActivityType.Watching,
//   },
//   {
//     name: "WebBot is coding!",
//     type: ActivityType.Competing,
//   }
// ];

// client.on("ready", async (c) => {
//   console.log(`${c.user.tag} is online`);
//   try {
//     const channel = await client.channels.cache.get("1305268339798704179");

//     if (!channel) return;

//     const row = new ActionRowBuilder();
//     roles.forEach((role) => {
//       row.components.push(
//         new ButtonBuilder().setCustomId(role.id).setLabel(role.label).setStyle(ButtonStyle.Primary)
//       )
//     })

//     await channel.send({
//       content: "Claim or remove a role below",
//       components: [row],
//     })
//     // process.exit();

//   } catch (e) {
//     console.log("Error: ", e)
//   }
//   setInterval(() => {
//     let random = Math.floor(Math.random() * status.length);
//     client.user.setActivity(status[random]);
//   }, 10000);
// });


eventHandler(client);

client.login(token);
