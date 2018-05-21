const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message, args) => {

    const status = {
        online: "Онлайн",
        idle: "Не активен",
        dnd: "Не беспокоить",
        offline: "Не в сети"
      };

    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    if (!member) return message.reply("Please provide a vaild Mention or USER ID");

  if (member.user.bot === true) {
    bot = "Да";
  } else {
    bot = "Нет";
  }

    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.displayAvatarURL)
    .addField("Никнейм:", `${member.nickname !== null ? `Ник: ${member.nickname}` : "Без ника."}`, true)
    .addField("Бот?", `${bot}`, true)
    .addField("Гильдий", `${bot}`, true)
    .addField("Статус", `${status[member.user.presence.status]}`, true)
    .addField("Играет в:", `${member.user.presence.game ? `${member.user.presence.game.name}` : "статуса игры не обнаружено."}`, true)
    .addField("Роли", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "No Roles"}`, true)
    .addField("Был приглашён:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`)
    .addField("Был создан", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`);

    message.channel.send(embed)
}

module.exports.help = {
    name: "ui"
}
