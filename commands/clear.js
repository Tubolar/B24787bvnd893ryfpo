const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("не могу произвести данную операцию.");
    if(!args[0]) return message.reply("не могу произвести данную операцию");

    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
        message.bulkDelete(args[0]).then(() =>{
            message.channel.send(`Удалено ${args[0]}сообщений`).then(message => message.delete(5000));
        }); 
    } else {
        message.reply("у Вас недостаточно прав.")
    }
}

module.exports.help = {
    name: "del"
}
