const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var modEmb = new Discord.RichEmbed()
    .setTitle("Команды для Модераторов сервера")
    .setDescription("```css\n,mute\n,unmute\n,tempmute\n,warn\n,clear```")
    .setFooter("Модуль:Модерация.")
    .setTimestamp()
    .setColor(0x00cc99)
    
    var erEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author},у вас недостаточно прав.`)
    .setColor(0xb30000);

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
