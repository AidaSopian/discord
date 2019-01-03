const Discord = require("discord.js");

const sql = require("sqlite");
sql.open("./score.sqlite");

module.exports.run = async (bot, message, args) => {

    sql.all(`SELECT weapon FROM Inventory WHERE player_id = "${message.author.id}"`).then(invent => {
      let weapon = [];

      for (var i in invent){
        if(!weapon.includes(invent[i].weapon)){
          weapon.push(invent[i].weapon);
        }
        //console.log(weapon[i]);
      }

      if (!args[0]) {
        const player_profile = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor("#f9bf36")
          .setDescription("Your Weapons");

           var toggle = true;
          for(var j = 0; j < weapon.length; j++){
              player_profile.addField("=>", weapon[j], toggle);
              //console.log(weapon[j]);
              toggle = !toggle;
              console.log(toggle);
          }
          
        message.channel.send(player_profile);s
      }

    }).catch(() => {
      console.error;
    });

}

module.exports.help = {
  name: "inventory"
}
