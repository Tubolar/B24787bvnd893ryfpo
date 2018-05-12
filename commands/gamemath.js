const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    var embed = new Discord.RichEmbed()
    .setTitle("Игра в Вычисление ➕ ➖")
    .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLN1gSWD0BSCBRGWXBsNy4tl-Pe4sGl0JcoQdCCc4ELv8UTo3") 
    .addField("Для того чтобы начать игру существует следующая команда", "Вычисление старт")
    .setDescription("У этой игры существуют следующие уровни сложности:                            1.Легкий                       2.Средний                            3.Сложный                                 4.Максимальный           5.Экстерн                                                                                                                                             Для того чтобы получить новый пример существует команда Пример=(ваш уровень)                                                                                     Бот даст пример с той сложностью,которую вы указали")
    .setFooter("Раздел:Игры Helper bot 2018 ©")
    .addField("Для того чтобы указать уровень сложности существует следующая команда", "Вычисление=(ваш уровень).")     
    .setColor("0x00cc99")
    message.channel.sendEmbed(embed);
}

module.exports.help = {
    name: "gamemath"
}
