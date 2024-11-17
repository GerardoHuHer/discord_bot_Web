module.exports = {
    name: "hey",
    description: "Replies with hey!",
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: option[],
    callback: (client, interaction) => {
        interaction.reply(`Hey!`);
    }
}