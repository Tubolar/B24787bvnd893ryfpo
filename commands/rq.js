const Discord = module.require("discord.js");
 
module.exports.run = async (bot, message, args) => {
   let gRole = message.guild.roles.find('name', "Гость")
   if(message.channel.id = "462942047813500928") {
        if(message.member.roles.has(gRole.id)) return;
       let schannel = bot.channels.find('name', "spam")
       message.member.addRole(gRole.id)
       .then(message.channel.send(`Пользователь ${message.author} получил доступ к некоторым текстовым и голосовым каналам.`))
       .then(schannel.send(`${message.author},Вы получили доступ к некоторым текстовым и голосовым каналам.`))
   } 
}

module.exports.help = {
    name: "rq"
}
