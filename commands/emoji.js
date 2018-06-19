const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var target = args.join(" ")
    var emoji = message.guild.emojis.find('name', target)
    message.react(emoji)
}

module.exports.help = {
    name: "react"
}
