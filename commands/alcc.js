const Discord = require("discord.js");
const config = require("../config.json");
const roles = config.rTD;

module.exports.run = async (bot, message, args) => {
    const modRole = message.guild.roles.find('name', "ZONTIk") 
    function cRole() {
        roles.forEach((role) => {
            let aRole = message.guild.roles.find('name', "Admin")
            let tRole = message.guild.roles.find("name", "Group");
            let dRole = message.guild.roles.find("name", "Посетитель");
            let rdRole = message.guild.roles.find("name", "Гость");
            let cArole = ["#080707","#1f1f2e", "#310125", "#191f20"];
            let ctRole = ["#000066","#0d0d0d","#333399","#4040bf"];
            let cdRole = ["#95291d","#d53b2a","#d94f3f","#aa2f22"];
            let crdRole = ["#217961","#1b6451","#268c71","#31b491"];
            let cctRoler = Math.floor((Math.random() * ctRole.length)); 
            let ccdRoler = Math.floor((Math.random() * cdRole.length)); 
            let ccrdRoler = Math.floor((Math.random() * crdRole.length)); 
            let cAroler = Math.floor((Math.random() * cArole.length))
            aRole.edit({color: cArole[cAroler]})
          .then(tRole.edit({color: ctRole[cctRoler]}))
          .then(dRole.edit({color: cdRole[ccdRoler]}))
          .then(rdRole.edit({color: crdRole[ccrdRoler]}))
          .catch(e => {
            return message.channel.sendMessage("Произошла ошибка,зайдите в консоль.");
          });
        });
      }
      let int = args[0]
   var embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#ff0066")
  .setTitle("Функция смены цветов для нескольких ролей")
  .addField("Частота смены цвета", `${int}`)
  .setTimestamp()
  .setFooter("RR Function handler")
  message.channel.send(embed)
    if(message.member.roles.has(modRole.id)) {
        let intr = args[0]
    setInterval(() => { cRole(); }, intr);
     
  } else {
    message.reply(`у Вас недостаточно прав.`);
  }
}
    module.exports.help = {
        name: "rall"
    }
