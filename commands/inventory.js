const Discord = require("discord.js");

const sql = require("sqlite");
sql.open("./score.sqlite");

module.exports.run = async (bot, message, args) => {

    sql.all(`SELECT * FROM Inventory WHERE player_id = "${message.author.id}"`).then(invent => {
      let weapon = [];

      //console.log(invent);

      for (var i in invent){
        if(!weapon.includes(invent[i].weapon_id)){
          weapon.push(invent[i].weapon_id);
        }
        //console.log(weapon[i]);
      }
      if (!args[0]) {

        var tempdisk = '';

        const player_profile = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor("#f9bf36")
          .setDescription("welp its something");

          // for (var j = 0; j <= weapon.lenght; j++){
          //   player_profile.addField("Weapon", weapon[j]);
          //   console.log(weapon[j]);
          // }
          
        message.channel.send(player_profile);

        for(var j = 0; j <= weapon.lenght; j++){
          //player_profile.addField("Weapon", weapon[j]);
          console.log(weapon[j]);
        }
      }

    }).catch(() => {
      console.error;
    });
}

module.exports.help = {
  name: "inventory"
}
