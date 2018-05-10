const Discord = require("discord.js");
const ms = require("ms")
module.exports.run = async (bot, message, args) => {

    let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply(",не могу найти участника");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("не могу это сделать");
    let muterole = message.guild.roles.find(`name`, "Mute");
    let mutetime = args[1];
    if(!mutetime) return message.reply(",Вы не указали время");

    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> получил запрет на **разговор в текстовых каналах на **${ms(ms(mutetime))}`);
    } else {
        message.reply(",у Вас недостаточно прав.")
    };

    let moddRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(moddRole.id)) {
    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> снова может писать сообщения в текстовых каналах.`);
    }, ms(mutetime));
}
} 

module.exports.help = {
    name: "tempmute"
}
