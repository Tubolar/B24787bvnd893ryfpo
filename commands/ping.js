const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var pingl = new Discord.RichEmbed()
    .setDescription(`**${message.author}**,получаю информацию...`)
    .setColor(0x00e6e6)
    message.channel.send(pingl).then(sent => sent.edit(new Discord.RichEmbed().setColor(0x00e6e6).addField("Хостинг", Math.round(bot.ping) + "ms", true).addField("API", sent.createdTimestamp - message.createdTimestamp + "ms", true)))
}

module.exports.help = {
    name: "ping"
}
