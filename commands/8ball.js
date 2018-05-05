const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    if(!args[2]) return message.reply("пожалуйста,задайте полный вопрос.");
    let replies = ["Да.", "Нет.", "Я не знаю ツ", "Возможно", "Скорее всего", "Это факт", "Спросите меня позже..."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("0x00cc99")
    .addField("Поставленный вопрос:", question)
    .addField("Ответ", replies[result]);

    message.channel.send(ballEmbed);



};

module.exports.help = {
    name: "8ball"
}   
