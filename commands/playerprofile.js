const Discord = require("discord.js");
const sql = require("sqlite");
sql.open("./score.sqlite");

module.exports.run = async (bot, message, args) => {

  sql.get(`SELECT * FROM player_list WHERE userId = "${message.author.id}"`).then(player => {
    if (!args[0]) {
      let player_profile = new Discord.RichEmbed()
        .setColor("#85b3ca")
        .setAuthor(message.author.username)
        .setDescription(`class: ${player.char_class}, level: ${player.level}, HP: ${player.maxhp}, MP: ${player.maxmp}, Atk: ${player.atk}, Def: ${player.def}, M Atk: ${player.mat}, M Def: ${player.mdf}, Agi: ${player.agi}, Luk: ${player.luk}`);
      message.channel.send(player_profile);
    }
  }
  )
};

module.exports.help = {
  name: "profile"
}