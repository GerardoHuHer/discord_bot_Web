const {ApplicationCommandOptionType, PermissionFlagsBits} = require("discord.js");
module.exports = {
    name: "timeout",
    description: "Timeout a user.",
    options: [
        {
            name: "targe-user",
            description: "The user you want to timeout.",
            type: ApplicationCommandOptionType.Mentionable,
            required: true,
        },
        {
            name: "duration",
            description: "Timeout duration(30m, 1h, 1 day)",
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: "reason",
            description: "The reason for the timeout.",
            type: ApplicationCommandOptionType.String,
        },
  ],
  perrmissionRequired: [PermissionFlagsBits.MuteMembers],
  BotPerrmission: [PermissionFlagsBits.MuteMembers],

}