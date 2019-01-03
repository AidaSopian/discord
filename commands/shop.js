const Discord = require("discord.js");

const sql = require("sqlite");
sql.open("./score.sqlite");

module.exports.run = async (bot, message, args) => {
  //console.log("test works");

  if (!args[0]) {
    let player_profile = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#85b3ca")
      .setDescription("Shop is empty");
    message.channel.send(player_profile);
  }

  sql.get(`SELECT Name FROM Weapons`).then(weapon => {

  }).catch(() => {
    console.error;
  });

 
}

module.exports.help = {
  name: "shop"
}