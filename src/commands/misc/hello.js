module.exports = {
    name: "hello",
    description: "Say hello",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: option[],
    callback: (client, interaction) => {
        interaction.reply(`Hello!`);
    }
}