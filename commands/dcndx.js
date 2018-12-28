const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
 
    let mR = message.guild.roles.find('name', "ZONTIk")
    if(message.member.roles.has(mR.id)) return message.reply("у меня недостаточно прав,так как Вы являетесь владельцем этого сервера.")
    let newn = args[2];
       if(!newn) return message.channel.send('Укажите Ваш новый никнейм.')
    message.member.setNickname(newn) 
    message.channel.send(message.author + ",Ваш ник успешно изменён.")
}
module.exports.help = {
    name: "т,можно"
}
