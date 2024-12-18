const {Client,Interaction,  ApplicationCommandOptionType, PermissionFlagsBits} = require("discord.js");
module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    callback: async (client, interaction) => {
        const targetUserId = interaction.options.get("target-user").value;
        const reason = interaction.options.get("reason")?.value || "No reason provided.";

        await interaction.deferReply();

        const targetUser = await interaction.guild.members.fetch(targetUserId);

        if(!targetUser ){
            await interaction.editReply("That user does not exist on the server.");
            return;
        }

        if(targetUser.id === interaction.guild.ownerId){
             await interaction.editReply("You can't ban that user because they are the server owner.");
             return;
        }

        const targetUserRolePosition = targetUser.roles.highest.position;
        const requestUser = interaction.member.roles.highest.position;
        const botRolePosition = interaction.guild.members.me.roles.highest.position;

        if(targetUserRolePosition >= requestUser){
              await interaction.editReply("You can't ban that user because they have the same or higher role than you.");
             return;
        }
        if(targetUserRolePosition >= botRolePosition){
              await interaction.editReply("I can't ban that user because they have the same or higher role than me.");
             return;
           
        }
        try {
            await targetUser.ban({reason});
            await interaction.editReply(`User ${targetUser} was banned\n Reason: ${reason}`)
        } catch (error) {
            console.log("There was a error when banning: ", error)
        }

    },

    name: "ban",
    description: "Bans a member from the server",
    // devOnly: Boolean,
    // testOnly: Boolean,
    options: [
        {
            name: "target-user",
            description: "The user to ban.",
            require: true,
            type: ApplicationCommandOptionType.Mentionable
        },
                {
            name: "reason",
            description: "The reason for banning",
            type: ApplicationCommandOptionType.String
        }

    ],
    permissionsRequired:[PermissionFlagsBits.Administrator],
    botPermissions:[PermissionFlagsBits.Administrator],
}