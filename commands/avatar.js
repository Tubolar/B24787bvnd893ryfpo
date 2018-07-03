const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    if(!user) return message.reply("ну могу найти участника.")

    var embed = new Discord.RichEmbed()
    .setImage(user.displayAvatarURL)
    .setColor(0x00cc99)
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "avatar"
}
