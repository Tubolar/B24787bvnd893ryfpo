const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
    let menUser = message.mentions.members.first() || message.guild.members.get(args[0]);
    menUser.setNickname(args[3])
    let reason = args.join(" ").slice(1);
    message.channel.send("Ник изменён.")
    } else {
        message.reply("у Вас недостаточно прав.")
    }  
} 

module.exports.help = {
    name: "т,поменяй"
}
