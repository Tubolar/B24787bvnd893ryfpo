const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(",Вы не можете это сделать");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Не удалось найти");
    let warnlevel = warns[wUser.id].warns;

    message.reply(`<@${wUser.id}> имеет **${warnlevel}** предупреждений(ие)`);

}

module.exports.help = {
    name: "warnlevel"
}
