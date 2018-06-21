const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    var date = new Date(message.createdAt)
message.channel.send(`${date} time`)
}

module.exports.help = {
    name: "time"
}
