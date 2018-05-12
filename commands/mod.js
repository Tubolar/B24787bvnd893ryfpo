const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var modEmb = new Discord.RichEmbed()
    .setTitle("Команды для Модераторов сервера")
    .setDescription("```css\n,mute\n,unmute\n,tempmute\n,warn\n,clear```")
    .setFooter("Модуль:Модерация.")
    .setTimestamp()

    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
        message.channel.send(modEmb);
    } else {
        message.reply("у вас недостаточно прав")
    }
}

module.exports.help = {
    name: "mcmd"
}
