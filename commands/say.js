const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Недостаточно прав.")
    let botmessage = args.join(" ");
    message.delete().catch();

    let modRole = message.guild.roles.find("name", "ZONTIk");
        if(message.member.roles.has(modRole.id)) {
        message.channel.send(botmessage)
        } else {
         message.reply(",у Вас недостаточно прав.")
        }
    };
module.exports.help = {
    name: "say"
}
