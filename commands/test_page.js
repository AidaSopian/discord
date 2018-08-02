module.exports.run = async (bot, message, args) => {
  // if(!args[0]) return message.reply("!class <warrior/archer>");
  console.log("test works");
}

module.exports.help = {
  name: "test"
}

// const Discord = require("./botconfig.json");
// const tokenfile = require("./token.json");


// const sql = require("sqlite");
// sql.open("./score.sqlite");

// bot.on("message", message => {
//   if (message.author.bot) return;
//   if (message.channel.type !== "text") return;

//   if (message.content.startsWith(prefix + "ping")) {
//     message.channel.send("pong!");
//   }

//   sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
//     if (!row) {
//       sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
//     } else {
//       let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
//       if (curLevel > row.level) {
//         row.level = curLevel;
//         sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
//         message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
//       }
//       sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
//     }
//   }).catch(() => {
//     console.error;
//     sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
//       sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
//     });
//   });

//   if (!message.content.startsWith(prefix)) return;

//   if (message.content.startsWith(prefix + "level")) {
//     sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
//       if (!row) return message.reply("Your current level is 0");
//       message.reply(`Your current level is ${row.level}`);
//     });
//   } else

//   if (message.content.startsWith(prefix + "points")) {
//     sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
//       if (!row) return message.reply("sadly you do not have any points yet!");
//       message.reply(`you currently have ${row.points} points, good going!`);
//     });
//   }
// });
// if (player && player.char_class != char) {
//   let player_warning = new Discord.RichEmbed()
//     .setAuthor(message.author.username)
//     .setColor("#e20f0f")
//     .addField("Are you sure", `this will reset your level back to level 1`);
//   message.channel.send(player_warning)
//     .then(function () {
//       message.channel.awaitMessages(response => message.content, {
//         include: "yes",
//         time: 10000,
//         errors: [time],
//       })
//         .then((collected) => {
//             sql.run(`UPDATE player_list SET level = 1, char_class = '${character}', maxhp = ${hp}, maxmp = ${mp}, atk = ${atk}, def = ${def}, mat = ${mat}, mdf = ${mdf}, agi = ${agi}, luk = ${luk} WHERE userId = ${message.author.id}`);

//             let player_profile = new Discord.RichEmbed()
//               .setAuthor(message.author.username)
//               .setColor("#85b3ca")
//               .addField("Alright!!", `You have change class to **${character}**!!`);
//             message.channel.send(player_profile);

//             })
//         .catch(function () {
//           message.channel.send(`${message.author.username} you took too long, nothing have been change`);
//         });
//     });
// }
