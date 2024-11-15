const {EmbedBuilder} = require("discord.js");
module.exports = {
    name: "embed",
    description: "Sends an embed",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: option[],
    callback: (client, interaction) => {
            const embed = new EmbedBuilder()
      .setTitle("Embed Title")
      .setDescription("This is an embed description")
      .setColor("Random")
      .addFields({
        name: "Field title",
        value: "Some Random Value",
        inline: true
      },
        {
          name: "Field title",
          value: "Some Random Value",
          inline: true
        }
      );
    interaction.reply({ embeds: [embed] });

    }
}