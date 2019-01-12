const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var pingl = new Discord.RichEmbed()
    .setDescription(`**${message.author}**,получаю информацию...`)
    .setColor(0x00e6e6)
    message.channel.send(pingl).then(sent => sent.edit(new Disoord.RichEmbed().setColor(0x00e6e6).addField("Хостинг", Math.round(bot.ping), true).addField("API", sent.createdTimestamp - message.createdTimestamp))))
}

module.exports.help = {
    name: "ping"
}
