const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var target = args.join(" ")
    var emoji = bot.emojis.find('name', target)
    message.channel.send(`**Резултат**:${emoji}`)
}

module.exports.help = {
    name: "emoji"
}
