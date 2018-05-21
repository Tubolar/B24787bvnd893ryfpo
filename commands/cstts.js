const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let statuses = {
        "online": "online",
        "on": "online",
        "invisible": "invisible",
        "offline": "invisible",
        "off": "invisible",
        "invis": "invisible",
        "i": "invisible",
        "dnd": "dnd",
        "idle": "idle"
      };

      let modRole = message.guild.roles.find("name", "ZONTIk");
      if(message.member.roles.has(modRole.id)) {
      if(!args[0]) return message,send(`Лог смотрите в консоли бота.`).then(setTimeout(message.delete.bind(message), 1000));
      let status = statuses[args[0].toLowerCase()];
      if(!status) {
        return message.send(`Не могу это сделать ${status} это не статус.`).then(setTimeout(message.delete.bind(message), 1000));
      }
      if(status === "on") status = "online";
      if(status === "off") status = "invisible";
      if(status === "i") status = "invisible";
      if(status === "offline") status = "invisible";
      bot.user.setStatus(status)
      .then(u=> {
        message.channel.send(`Статус изменён на ${status}`).then(setTimeout(message.delete.bind(message), 1000));
      }).catch(e=> {
        message.channel.send(`Произошла ошибка: ${status}\n\`\`\`${e}\`\`\``).then(setTimeout(msg.delete.bind(msg), 1000));
      });
  };
}

module.exports.help = {
    name: "ss"
}
