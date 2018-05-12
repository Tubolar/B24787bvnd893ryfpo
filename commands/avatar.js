const Discord = require("discord.js");
const embedColor = require("/embedColor.json");
 
module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    if(!user) return message.reply(",не могу найти участника");

    var embed = new Discord.RichEmbed()
    .setImage(user.displayAvatarURL)
    .setColor(embedColor.color)
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "avatar"
}
