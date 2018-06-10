const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let newn = args[2];
    let reason = args.join(" ").slice(1);
    if(!newn) return message.reply("укажите Ваш новый ник.")
    message.member.setNickname(newn)
    message.channel.send(message.author + ",Ваш ник успешно изменён")
}

module.exports.help = {
    name: "т,можно"
}
