const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Недостаточно прав.")

    const sayEmbed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor("00e699")
    message.delete().catch();


    let modRole = message.guild.roles.find("name", "ZONTIk");
        if(message.member.roles.has(modRole.id)) {
        message.channel.send(sayEmbed)
        } else {
            message.reply({embed:{
                "description": `**${message.author}**,произошла ошибка\nПричина:**нет достаточных прав**`,
                "color": 16711680
              }
            })
        }
}

module.exports.help = {
    name: "msay"
}
