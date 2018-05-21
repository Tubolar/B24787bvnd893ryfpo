const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    let modRole = message.guild.roles.find("name", "ZONTIk");
    if(message.member.roles.has(modRole.id)) {
    var game = args.join(" ").trim();
    bot.user.setActivity(`${game}`, { type: 'WATCHING' });
    message.delete().catch(console.error);
  } else {
     message.reply(`у Вас недостаточно прав.`)
  }
}
module.exports.help = {
    name: "sgw"
}
