const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    embed.setAuthor(message.author, message.author.displayAvatarURL)
    embed.setTitle("Цвет роли TOP успешно изменён")
    embed.setFooter("Group TOP-GAMERS")
    embed.setTimestamp(new Date())
    embed.addField("Новый цвет", TOP.color)
    embed.setColor("#862d86");
    let builder = new Discord.RichEmbed()
    .setAuthor(message.author, message.author.displayAvatarURL)
    .setDescription(`${message.author},у вас недостаточно прав.`)
    .setFooter(`Group TOP-GAMERS`)
    .setTimestamp(new Date())
    let color = args[3]
    let TOP = message.guild.roles.find('name', "TOP")
    let TOPRole = message.guild.roles.find('name', "TOP")
    if(message.member.roles.has(TOPRole.id)) {
        TOP.setColor(color).then(message.channel.send(embed))
} else {
    message.channel.send(builder)
}
}

module.exports.help = {
    name: "т,поменяй"
}
   
