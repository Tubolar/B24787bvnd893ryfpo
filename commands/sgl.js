const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    let modRole = message.guild.roles.find("name", "ZONTIk");
    if(message.member.roles.has(modRole.id)) {
        var errEmbed = new Discord.RichEmbed()
        .setDescription(message.author.username + "у Вас недостаточно прав.")
        .setColor(0xb30000);
    var game = args.join(" ").trim();
    bot.user.setActivity(`${game}`, { type: 'LISTENING' });
    message.delete().catch(console.error);
  } else {
     message.reply(`у Вас недостаточно прав.`)
  }
}
module.exports.help = {
    name: "sgl"
}
