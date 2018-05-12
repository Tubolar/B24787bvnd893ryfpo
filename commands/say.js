const Discord = require("discord.js");
const errorcolor = require("../embedcolor.json");

module.exports.run = async (bot, message, args) => {
    
     var erEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author},у вас недостаточно прав.`)
    .setColor(errorcolor.error)

    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Недостаточно прав.")
    let botmessage = args.join(" ");
    message.delete().catch();

    let modRole = message.guild.roles.find("name", "ZONTIk");
        if(message.member.roles.has(modRole.id)) {
        message.channel.send(botmessage)
        } else {
         message.channel.send(erEmbed)
        }
    };
module.exports.help = {
    name: "say"
}
