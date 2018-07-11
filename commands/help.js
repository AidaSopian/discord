const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //console.log("test works");

  let player_profile = new Discord.RichEmbed()
    .setColor("#85b3ca")
    .setDescription("$class, $class.characters, $class.tank (or select any character), $playerprofile");
  message.channel.send(player_profile);
}

module.exports.help = {
  name: "help"
}
