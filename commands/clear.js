const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("не могу произвести данную операцию");

    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
        message.channel.bulkDelete(args[0])
    } else {
        message.reply("у Вас недостаточно прав.")
    }
}

module.exports.help = {
    name: "del"
}
