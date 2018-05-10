const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply(",не могу найти участника");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("не могу это сделать");
    let muterole = message.guild.roles.find(`name`, "Mute");

    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
    await(tomute.addRole(muterole.id));
    message.reply(`пользователь <@${tomute.id}> получил запрет на **разговор в текстовых каналах**`);
    } else {
        message.reply(",у Вас недостаточно прав.")
    };

}

module.exports.help = {
    name: "mute"
}
