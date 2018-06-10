
const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let newn = args[2];
    let reason = args.join(" ").slice(1);
    if(!newn) return message.reply("укажите Ваш новый ник.")
    let modRole = message.guild.roles.find('name', "TOP")
    if(message.member.roles.has(modRole.id)) return message.reply("у меня недостаточно прав,так как Ваша роль находится выше моей.")
    let mR = message.guild.roles.find('name', "ZONTIk")
    if(message.member.roles.has(mR.id)) return message.reply("у меня недостаточно прав,так как Вы являетесь владельцем этого сервра.")
    message.member.setNickname(newn)
    message.channel.send(message.author + ",Ваш ник успешно изменён")
}

module.exports.help = {
    name: "т,можно"
}
