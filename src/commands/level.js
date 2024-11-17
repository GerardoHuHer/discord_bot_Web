const {Client, Interaction, ApplicationCommandOptionType} = require("discord.js")
module.exports = {
    /**
     * 
     * @param {Client} client 
     * @param {Interaction} interaction 
     */
    callback: (client, interaction) => {
        
    },
    name: "level",
    description: "Shows your/someone's level.",
    options: [
        {
            name: "targe-user",
            description: "The user whose level you want to see.",
            type: ApplicationCommandOptionType.Mentionable
        }
    ]
}