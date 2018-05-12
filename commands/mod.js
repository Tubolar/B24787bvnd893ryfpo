const Discord = require("discord.js");
const errorcolor = require("./embedcolor.json");
 
module.exports.run = async (bot, message, args) => {
    var modEmb = new Discord.RichEmbed()
    .setTitle("Команды для Модераторов сервера")
    .setDescription("```css\n,mute\n,unmute\n,tempmute\n,warn\n,clear```")
    .setFooter("Модуль:Модерация.")
    .setTimestamp()
    
    var erEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author},у вас недостаточно прав.`)
    .setColor(errorcolor.error);

    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
        message.channel.send(modEmb);
    } else {
        message.channel.send(erEmbed)
    }
}

module.exports.help = {
    name: "mcmd"
}
