const Discord = require("discord.js");
const sql = require("sqlite");
sql.open("./score.sqlite");

module.exports.run = async (bot, message, args) => {

  sql.get(`SELECT * FROM player_list WHERE userId = "${message.author.id}"`).then(player => {
    if (!args[0]) {
      let player_profile = new Discord.RichEmbed()
        .setColor("#85b3ca")
        .setAuthor(message.author.username)
        .setDescription(`class: ${player.class}, level: ${player.level}, HP: ${player.maxhp}, MP: ${player.maxmp}, Atk: ${player.atk}, Def: ${player.def}, M Atk: ${player.mat}, M Def: ${player.mdf}, Agi: ${player.agi}, Luk: ${player.luk}`);
      message.channel.send(player_profile);
    }
  }
  )
};

module.exports.help = {
  name: "profile"
}

// .addField("CLASS:", `${player.class}`)
//         .addField("LEVEL:", `${player.level}`)
//         .addField("HP   :", `${player.maxhp}`)
//         .addField("MP   :", `${player.maxmp}`)
//         .addField("ATK  :", `${player.atk}`)
//         .addField("DEF  :", `${player.def}`)
//         .addField("M ATK:", `${player.mat}`)
//         .addField("M.DEF:", `${player.mdf}`)
//         .addField("AGI  :", `${player.agi}`)
//         .addField("LUK  :", `${player.luk}`)