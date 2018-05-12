const Discord = require("discord.js");
const errorcolor = require("./embedcolor.json");
module.exports.run = async (bot, message, args) => {
     
    var erEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author},у вас недостаточно прав.`)
    .setColor(errorcolor.error)
    
    let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply(",не могу найти участника");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("не могу это сделать");
    let muterole = message.guild.roles.find(`name`, "Mute");

    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
    await(tomute.addRole(muterole.id));
    message.reply(`пользователь <@${tomute.id}> получил запрет на **разговор в текстовых каналах**`);
    } else {
         message.channel.send(erEmbed)
    };

}

module.exports.help = {
    name: "mute"
}
