// ready/sendRoleMessage.js
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require("discord.js");

module.exports = async (client) => {
  const roles = [
    { id: "1305267111282868284", label: "Red Team" },
    { id: "1305267179138318478", label: "Green Team" },
    { id: "1305267265847164998", label: "Blue Team" }
  ];

  try {
    const channel = await client.channels.cache.get("1305268339798704179");
    if (!channel) return;

    const row = new ActionRowBuilder();
    roles.forEach((role) => {
      row.addComponents(
        new ButtonBuilder()
          .setCustomId(role.id)
          .setLabel(role.label)
          .setStyle(ButtonStyle.Primary)
      );
    });

    await channel.send({
      content: "Claim or remove a role below",
      components: [row],
    });
  } catch (e) {
    console.log("Error sending role message:", e);
  }
};
