const {ActivityType} = require("discord.js");

module.exports = async (client, interaction) => {
let status = [
  {
    name: "WebBot is watching you!",
    type: ActivityType.Watching,
  },
  {
    name: "WebBot is coding!",
    type: ActivityType.Competing,
  }
];

  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 10000);

}
