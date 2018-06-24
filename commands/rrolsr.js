const Discord = require("discord.js");
const config = require("../config.json");
const roles = config.rTD;

module.exports.run = async (bot, message, args) => {
    const modRole = message.guild.roles.find('name', "ZONTIk") 
    function cRole() {
        let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        roles.forEach((role) => {
        let role = message.guild.roles.find('name', "Rainbow")
            role.edit({color: random})
          .catch(e => {
            return message.channel.sendMessage("Произошла ошибка,зайдите в консоль.");
          });
        });
      }
      let int = args[0]
   var embed = new Discord.RichEmbed()
   .setTitle("Смена цветов")
   .setDescription("**Частота смены цвета:**" + "`" + int + "`"
  message.channel.send(embed)
    if(message.member.roles.has(modRole.id)) {
        let intr = args[0]
    setInterval(() => { cRole(); }, intr);
     
  } else {
    message.reply(`у Вас недостаточно прав.`);
  }
}
    module.exports.help = {
        name: "rs"
    }
