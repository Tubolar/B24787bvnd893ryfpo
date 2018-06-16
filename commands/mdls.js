const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   builder = new Discord.RichEmbed()
   builder.setTitle("Доступные модули")
   builder.setDescription("•Owner\n•Moderation\n•Games\n•Help\n•Utility")
   builder.setColor(0x0ffff)
   builder.setFooter("Helper bot ©2018")
   message.channel.send({embed: builder})
}
module.exports.help = {
    name: "mdls"
}
