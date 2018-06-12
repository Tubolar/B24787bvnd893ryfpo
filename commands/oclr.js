const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let aRole = message.guild.roles.find('name', "Admin")
            let tRole = message.guild.roles.find("name", "Group");
            let dRole = message.guild.roles.find("name", "Посетитель");
            let rdRole = message.guild.roles.find("name", "Гость");
            let mRole = message.guild.roles.find('name', "ZONTIk")
            if(message.member.roles.has(mRole.id)) {
                aRole.setColor("#030303")
                tRole.setColor("#030303")
                dRole.setColor("#95291D")
                rdRole.setColor("#217961")
            } else {
                message.reply("у Вас недостаточно прав.")
            }
}
module.exports.help = {
    name: "oclrs"
}
