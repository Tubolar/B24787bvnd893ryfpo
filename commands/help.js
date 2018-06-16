const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
    var embed = new Discord.RichEmbed()
    .setDescription("```ini\n++cmd [имя_команды]\n++mcmds [имя_модуля]\n++mdls [список_модулей]```")
    .setColor(0x0ffff)
    .setFooter("Helper bot ©2018")
    message.channel.send(embed);
};

module.exports.help = {
    name: "help"
}
