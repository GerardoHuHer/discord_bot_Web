
const { Client, IntentsBitField, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, IntegrationApplication, ActivityType } = require("discord.js");
require("dotenv").config();
const token = process.env.TOKEN;


const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

// const roles = [{
//   id: "1305267111282868284",
//   label: "Red Team",
// },
// {
//   id: "1305267179138318478",
//   label: "Green Team",
// },
// {
//   id: "1305267265847164998",
//   label: "Blue Team",
// }
// ]

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

// client.on("interactionCreate", async (interaction) => {
//   if (!interaction.isChatInputCommand()) return;
//   if (interaction.commandName === "help"){
    
//     const helpEmbed = new EmbedBuilder()
//       .setTitle("Commands")
//       .setDescription("This is an embed description")
//       .setColor("Random")
//       .addFields(commandsEmbed);
//     interaction.reply({ embeds: [helpEmbed] });
//   }
//   if (interaction.commandName === "hey") {
//     interaction.reply("Hey!");
//   }
//   if (interaction.commandName === "add") {
//     const num1 = interaction.options.get("first-number")?.value
//     const num2 = interaction.options.get("second-number")?.value
//     interaction.reply(`The sum is: ${num1 + num2}`)
//   }
//   if (interaction.commandName === "embed") {
//     const embed = new EmbedBuilder()
//       .setTitle("Embed Title")
//       .setDescription("This is an embed description")
//       .setColor("Random")
//       .addFields({
//         name: "Field title",
//         value: "Some Random Value",
//         inline: true
//       },
//         {
//           name: "Field title",
//           value: "Some Random Value",
//           inline: true
//         }
//       );
//     interaction.reply({ embeds: [embed] });
//   }
// });

// client.on("interactionCreate", async (interaction) => {
//   try {
//     if (!interaction.isButton()) return;
//     await interaction.deferReply({ ephemeral: true })
//     const role = interaction.guild.roles.cache.get(interaction.customId);
//     if (!role) {
//       interaction.editReply({
//         content: "I could not find that role",
//       })
//       return;
//     }
//     const hasRole = interaction.member.roles.cache.has(role.id);
//     if (hasRole) {
//       await interaction.member.roles.remove(role);
//       await interaction.editReply(`The role ${role} has been removed.`);
//       return;
//     }
//     await interaction.member.roles.add(role);
//     await interaction.editReply(`The role ${role} has been added.`)
//   } catch (e) {
//     console.log("There was an error: ", e)
//   }
// })

// client.on("messageCreate", (msg) => {
//   if (msg.content === "embed") {

//     const embed = new EmbedBuilder()
//       .setTitle("Embed Title")
//       .setDescription("This is an embed description")
//       .setColor("Random")
//       .addFields({
//         name: "Field title",
//         value: "Some Random Value",
//         inline: true
//       },
//         {
//           name: "Field title",
//           value: "Some Random Value",
//           inline: true
//         }
//       );
//     msg.channel.send({ embeds: [embed] });
//   }
// })

eventHandler(client);

client.login(token);
