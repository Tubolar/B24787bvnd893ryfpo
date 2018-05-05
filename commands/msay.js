const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Недостаточно прав.")

    const sayEmbed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor("#15f153")
    message.delete().catch();

    message.channel.send(sayEmbed)



};

module.exports.help = {
    name: "msay"
}   
