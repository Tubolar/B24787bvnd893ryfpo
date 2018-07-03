
const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    let modRole = message.guild.roles.find('name', "TOP")
    if(message.member.roles.has(modRole.id)) return message.reply("у меня недостаточно прав,так как Ваша роль находится выше моей.")
    let mR = message.guild.roles.find('name', "ZONTIk")
    if(message.member.roles.has(mR.id)) return message.reply("у меня недостаточно прав,так как Вы являетесь владельцем этого сервера.")
    let newn = args[2];
       if(!newn) { return message.channel.send('Укажите Ваш новый никнейм.')
    .then(() => {
      message.channel.awaitMessages(nickname => nickname = message.content, {
        max: 1,
        time: 30000,
        errors: ['time'],
      })
      .then((collected) => {
          message.member.setNickname(message.content)
          message.channel.send(`Ваш никнейм успешно изменён`);
        })
    }).catch(() => {
        message.channel.send("Никнейм не был установлен,так как я не получил его течении 30 секунд");
      });
    }
    message.member.setNickname(newn) 
    message.channel.send(message.author + ",Ваш ник успешно изменён.)
}

module.exports.help = {
    name: "т,можно"
}
