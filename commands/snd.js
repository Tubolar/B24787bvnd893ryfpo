const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let action = args[0]
    let u = bot.users.get(action)
    if(!action) return message.reply("укажите участника.")
    let msg = args.join(" ").slice(18)
    if(!msg) return message.reply("укажите сообщение.")
    let zR = message.guild.roles.find('name', "ZONTIk")
    if(message.member.roles.has(zR.id)){
        u.send(msg).then(message.channel.send("Сообщение отправлено"))
    } else message.channel.send("у Вас недостаточно прав").then(sent => sent(delete(10000))).then(message.delete(5000))
}

module.exports.help = {
    name: "send"
}
