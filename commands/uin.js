const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    const AccountCreated = message.author.createdAt
    const AccountJoined = message.member.joinedAt
    
    const strings_months = {
        Jan: "Янв",
        Feb: "Фев",
        Mar: "Мар",
        Apr: "Апр",
        Jun: "Июн",
        Jul: "Июл",
        Aug: "Авг",
        Sep: "Сен",
        Oct: "Окт",
        Nov: "Ноя",
        Dec: "Дек"
      };
      const strings_days = {
          Mon: "Пн",
          Tue: "Вт",
          Wed: "Ср",
          Thu: "Чт",
          Fri: "Пт",
          Sat: "Суб",
          Sun: "Вс"
      }
    let D = AccountJoined.toString().split(" ")[0]
    let M = AccountJoined.toString().split(" ")[1]
    let Y = AccountJoined.toString().split(" ")[3]
    let T = AccountJoined.toString().split(" ")[4]
    

    let d = AccountCreated.toString().split(" ")[0]
    let m = AccountCreated.toString().split(" ")[1]
    let y = AccountCreated.toString().split(" ")[3]
    let t = AccountCreated.toString().split(" ")[4]


   
    const status = {
        online: "Онлайн",
        dnd: "Не беспокоить",
        idle: "Не активен",
        offline: "Не в сети"
    }

    let uicon = message.author.displayAvatarURL
    var builder = new Discord.RichEmbed()
    builder.setAuthor(message.author.username, uicon)
    builder.setImage(uicon)
    builder.setThumbnail(uicon)
    builder.addField("Создан:", `${strings_days[d]}/${strings_months[m]}/${y}/${t}`)
    builder.addField("Приглашён", `${strings_days[D]}/${strings_months[M]}/${Y}/${T}`)
    builder.addField("Статус", `${status[message.member.user.presence.status]}`)
    builder.addField("Статус игры", `${message.member.user.presence.game ? `${message.member.user.presence.game.name}` : "Игры не обнаружено."}`)
    builder.setColor(message.member.displayHexColor)
    message.channel.send({embed: builder}).then(msg => msg.delete(20000)).then(message.delete(20000))
}
module.exports.help = {
    name: "me"
}
