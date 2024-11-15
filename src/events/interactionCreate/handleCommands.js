const {testServer, devs} = require("../../../config.json");
const getLocalCommands = require("../../utils/getLocalCommands");
const handleRoleButtons = require("./handleRoleButtons");

module.exports = async(client, interaction) => {
    if (interaction.isButton()) {
        return handleRoleButtons(client, interaction);
      }
       
    if(!interaction.isChatInputCommand())return;

    const localCommands = getLocalCommands();
    try {
        const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName)
        if(!commandObject) return;
        if(commandObject.devOnly){
            if(!devs.includes(interaction.member.id)){
                interaction.reply({
                    content: "Only developers are allowed to run this command.",
                    ephemeral: true
                });
                return;

            }
        }
        if(commandObject.testOnly){
            if(!(interaction.guild.id === testServer)){
                interaction.reply({
                    content: "This command cannot be ran here",
                    ephemeral: true
                });
                return;

            }
        }

        if(commandObject.permissionsRequired?.length){
            for (const permission of commandObject.permissionsRequired){
                if(!interaction.member.permissions.has(permission)){
                    interaction.reply({
                        content: "Not enough permissions.",
                        ephemeral: true
                    });
                    return;
                }
            }
        }

        
        if(commandObject.botPermissions?.length){
            for(const permission of commandObject.botPermissions){
                const bot = interaction.guild.members.me;
                if(!bot.permissions.has(permission)){
                    interaction.reply({
                        content: "I don't have permissions.",
                        ephemeral: true,
                    });
                    break;
                }
            }
        }
        await commandObject.callback(client, interaction);

        
    } catch (error) {
        console.log(`There was an error runnig this command: ${error}`)
    }
    
}