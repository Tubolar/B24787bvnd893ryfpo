const Discord = require("discord.js");
const errorcolor = require("./embedcolor.json");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Недостаточно прав.")

    var erEmbed = new Discord.RichEmbed()
    .setDescription(`${message.author},у вас недостаточно прав.`)
    .setColor(0xb30000)

    const sayEmbed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor("00e699")
    message.delete().catch();


    let modRole = message.guild.roles.find("name", "ZONTIk");
        if(message.member.roles.has(modRole.id)) {
        message.channel.send(sayEmbed)
        } else {
            message.channel.send(erEmbed)
}

module.exports.help = {
    name: "msay"
}
