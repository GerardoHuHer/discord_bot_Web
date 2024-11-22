const ms = require("ms")
const {Client, Interaction, ApplicationCommandOptionType, PermissionFlagsBits} = require("discord.js");
module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    callback: async (client, interaction) => {
        const mentionable = interaction.options.get("targe-user").value;
        const duration =interaction.options.get("duration").value;
        const reason =interaction.options.get("reason")?.value || "No reason provided.";
        await interaction.deferReply();
        const targetUser = await interaction.guild.members.fetch(mentionable);
        if(!targetUser){
            await interaction.editReply("That user does not exist in this server.");
            return;
        }
        if(targetUser.user.bot){
            await interaction.editReply("I cannot timeout a bot.");
            return;
        }
        const msDuration = ms(duration);
        if (isNaN(msDuration)){
            await interaction.editReply("Please provide a valid timeout duration.");
            return;
        }
        if (msDuration < 5000 || msDuration > 2.419e9){
             await interaction.editReply("Timeout cannot be less than 5 seconds or more than 28 days.");
            return;
           
        }
        const targetUserRolePosition = targetUser.roles.highest.position;
        const requestUser = interaction.member.roles.highest.position;
        const botRolePosition = interaction.guild.members.me.roles.highest.position;

        if(targetUserRolePosition >= requestUser){
              await interaction.editReply("You can't timeout that user because they have the same or higher role than you.");
             return;
        }
        if(targetUserRolePosition >= botRolePosition){
              await interaction.editReply("I can't timeout that user because they have the same or higher role than me.");
             return;
        }
        try {
            const {default: prettyMs} = await import("pretty-ms");

            if(targetUser.isCommunicationDisabled()){
                await targetUser.timeout(msDuration, reason);
                await interaction.editReply(`${targetUser}'s timeout has been updated to ${prettyMs(msDuration, {verbose: true})}\nReason: ${reason}`);
                return;
            }
            await targetUser.timeout(msDuration, reason);
            await interaction.editReply(`${targetUser} was timeout for ${prettyMs(msDuration, {verbose: true})}.\nReason: ${reason}`);
           
        } catch (error) {
            console.log(`There was an error when timing out: ${error}`)
        }

  },
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
