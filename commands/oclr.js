const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let aRole = message.guild.roles.find('name', "Admin")
            let tRole = message.guild.roles.find("name", "High");
            let dRole = message.guild.roles.find("name", "Medium");
            let rdRole = message.guild.roles.find("name", "Low");
            let btRole = message.guild.roles.find("name", "Бот");
            let mRole = message.guild.roles.find('name', "ZONTIk")
            if(message.member.roles.has(mRole.id)) {
                aRole.setColor("#030303")
                tRole.setColor("#180303")
                dRole.setColor("#4BA5D4")
                rdRole.setColor("#927954")
                btRole.setColor("#206694")
            } else {
                message.reply("у Вас недостаточно прав.")
            }
}
module.exports.help = {
    name: "oclrs"
}
