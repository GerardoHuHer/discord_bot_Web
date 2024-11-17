module.exports = {
    name: "prueba",
    description: "Prueba para ver si se registraba el comando",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: option[],
    callback: (client, interaction) => {
        interaction.reply(`Prueba`);
    }
}