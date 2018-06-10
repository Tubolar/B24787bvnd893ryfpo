const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let TOPRole = message.guild.roles.find(`name`, "TOP")
    let embed = new Discord.RichEmbed()
    embed.setAuthor(message.author.username, message.author.displayAvatarURL)
    embed.setTitle("Цвет роли TOP успешно изменён")
    embed.setFooter("Group TOP-GAMERS")
    embed.setTimestamp(new Date())
    embed.addField("Новый цвет", TOPRole.color)
    embed.setColor("#862d86");
    let builder = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`${message.author},у вас недостаточно прав.`)
    .setFooter(`Group TOP-GAMERS`)
    .setTimestamp(new Date())
    .setColor("#8d4646")
    let color = args[3]
    if(!color) return message.channel.send(`${message.author},Вы не указали цвет роли.`)
    if(message.member.roles.has(TOPRole.id)) {
        TOPRole.setColor(color).then(message.channel.send(embed))
} else {
    message.channel.send(builder)
}
}

module.exports.help = {
    name: "т,смени"
}
