const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {


    let replies = ["Да.", "Нет.", "Я не знаю ツ", "Возможно", "Скорее всего", "Это факт", "Спросите меня позже..."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ")
    if(!question) return message.channel.send("Пожалуйста,задайте вопрос.")
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
