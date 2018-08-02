const Discord = require("discord.js");

const sql = require("sqlite");
sql.open("./score.sqlite");

module.exports.run = async (bot, message, args) => {
  //console.log("test works");

  if (!args[0]) {
    let player_profile = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#85b3ca")
      .setDescription("do it like this -> $class.white-mage");
    message.channel.send(player_profile);
  }

  let char = args;

  if (char == 'char') {
    let player_profile = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#85b3ca")
      .addField("pick your poison", "white-mage, black-mage, rougue, tank, warrior");
    message.channel.send(player_profile);
  }

  sql.get(`SELECT * FROM character_class WHERE classname = "${char}"`).then(char_class => {
    let character = char_class.classname;
    let hp = char_class.maxhp;
    let mp = char_class.maxmp;
    let atk = char_class.atk;
    let def = char_class.def;
    let mat = char_class.mat;
    let mdf = char_class.mdf;
    let agi = char_class.agi;
    let luk = char_class.luk;

    sql.get(`SELECT * FROM player_list WHERE userId = "${message.author.id}"`).then(player => {
      if (player && player.char_class != char) {
        let player_warning = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor("#e20f0f")
          .addField("Are you sure", `this will reset your level back to level 1`);
        message.channel.send(player_warning)
          .then(()=> {
            message.channel.awaitMessages(response => response.content === "yes", {
              max: 1,
              time: 10000,
              errors: ['time'],
            })
              .then((collected) => {
                  console.log(collected.first().content);
                  sql.run(`UPDATE player_list SET level = 1, char_class = '${character}', maxhp = ${hp}, maxmp = ${mp}, atk = ${atk}, def = ${def}, mat = ${mat}, mdf = ${mdf}, agi = ${agi}, luk = ${luk} WHERE userId = ${message.author.id}`);

                  let player_profile = new Discord.RichEmbed()
                    .setAuthor(message.author.username)
                    .setColor("#85b3ca")
                    .addField("Alright!!", `You have change class to **${character}**!!`);
                  message.channel.send(player_profile);

                  })
              .catch(function () {
                message.channel.send(`${message.author.username} you took too long, nothing have been change`);
              });
          });
      }

      else if (!player) {
        sql.run("INSERT INTO player_list (userId, level,char_class, maxhp , maxmp, atk, def, mat, mdf, agi, luk) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [message.author.id, 1, character, hp, mp, atk, def, mat, mdf, agi, luk]);

        let player_profile = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor("#85b3ca")
          .addField("Congratulation!! you are now a ", `${char}`);
        message.channel.send(player_profile);
      }

      else {
        let player_profile = new Discord.RichEmbed()
          .setAuthor(message.author.username)
          .setColor("#85b3ca")
          .addField("<.<", `Dude, you are already a **${character}**!!`);
        message.channel.send(player_profile);
      }

    }).catch(() => {
      console.error;
    });

  }).catch(() => {
    console.error;
  });

}

module.exports.help = {
  name: "class"
}
