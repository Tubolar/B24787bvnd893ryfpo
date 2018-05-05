const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var embed = new Discord.RichEmbed()
    .setDescription("```yaml\n•.+help\n•.+link\n•.+avatar\n•.+aboutme\n•.+serverinfo\n•.+game\n•.+roles\n•.+rules```")
    .setColor(embedColor.color)
    .setFooter("Helper bot ©2018")
    message.channel.sendEmbed(embed);
};

module.exports.help = {
    name: "help"
}
