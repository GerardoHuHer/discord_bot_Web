const { ButtonInteraction } = require("discord.js");

module.exports = async (client, interaction) => {
  if (!interaction.isButton()) return;

  const roleId = interaction.customId; 
  const member = interaction.member;  

  try {
    if (!interaction.replied) {
      await interaction.deferReply({ ephemeral: true });
    }

    const role = interaction.guild.roles.cache.get(roleId);
    if (!role) {
      return interaction.followUp({
        content: "Role not found.",
        ephemeral: true
      });
    }

    if (member.roles.cache.has(role.id)) {
      // Eliminar el rol
      await member.roles.remove(role);
      return interaction.followUp({
        content: `Role ${role.name} removed!`,
        ephemeral: true
      });
    } else {
      await member.roles.add(role);
      return interaction.followUp({
        content: `Role ${role.name} added!`,
        ephemeral: true
      });
    }
  } catch (error) {
    console.error("Error while handling role button interaction:", error);
    // interaction.followUp({
    //   content: "There was an error while processing your request.",
    //   ephemeral: true
    // });
  }
};
