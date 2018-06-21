const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
       var date = new Date()
    const day_strings = {
        Mon: "Пн",
        Tue: "Вт",
        Wed: "Ср",
        Thu: "Чт",
        Fri: "Пт",
        Sat: "Суб",
        Sun: "Вс" 
    }
    const months_strings = {
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
    }

    let D = date.toString().split(" ")[0]
    let M = date.toString().split(" ")[1]
    let Y = date.toString().split(" ")[3]
    let T = date.toString().split(" ")[4]
message.channel.send(`${day_strings[D]}/ ${months_strings[M]}`)
}

module.exports.help = {
    name: "time"
}
