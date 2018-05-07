const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first() || message.quild.members.get(args[0]));
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()

    .setTitle("Заявления")
    .setColor("0x00cc99")
    .addField("Заявленный участник", `${rUser} с ID ${rUser.id}`)
    .addField("Заявление подал", `${message.author} с ID ${message.author.id}`, true)
    .addField("Канал", message.channel, true)
    .addField("Время", message.createdAt, true)
    .addField("Причина", rreason)
    .setColor("0x00cc99")
    .setTimestamp(message.createdAt)
    .setFooter("Журнал репортов")

    let reportsChannel = message.guild.channels.find(`name`, "moderator");
    if(!reportsChannel) return message.channel.send("Не могу найти репорты на данном канале");

    message.delete().catch(O_o=>{});
    reportsChannel.send(reportEmbed);
}

module.exports.help = {
    name: "report"
}
