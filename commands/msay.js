const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Недостаточно прав.")

    const sayEmbed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor(0x00cc99)
    message.delete().catch();


    let modRole = message.guild.roles.find("name", "ZONTIk");
        if(message.member.roles.has(modRole.id)) {
        message.channel.send(sayEmbed)
        } else {
            message.reply("у вас недостаточно прав")
        }
}

module.exports.help = {
    name: "msay"
}
