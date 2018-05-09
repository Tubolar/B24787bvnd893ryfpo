const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var pingl = new Discord.RichEmbed()
    .setDescription(`**${message.author}**,мой отклик составляет ${Math.round(bot.ping)} мc`)
    .setColor(0x00e6e6)
    message.channel.send(pingl)
}

module.exports.help = {
    name: "ping"
}
