const Discord = module.require("discord.js");
 
module.exports.run = async (bot, message, args) => {
   let nRole = message.guild.roles.find('name', "Новый участник/New member")
   let gRole = message.guild.roles.find('name', "Гость")
   if(message.member.roles.has(nRole.id)) {
       let schannel = bot.channels.find('name', "spam")
       message.member.addRole(gRole.id).then(message.member.removeRole(nRole.id))
       .then(message.channel.send(`Пользователь ${message.author} получил доступ к некоторым текстовым и голосовым каналам.`))
       .then(schannel.send(`${message.author},Вы получили доступ к некоторым текстовым и голосовым каналам.`))
   } 
}

module.exports.help = {
    name: "rq"
}
