const  math = require('mathjs');
const Discord = require('discord.js')
module.exports.run = (bot, message, args) => {
    let primer = args.join(" ");
    if (!primer) {
        message.reply("Вы не указали вычисление.");
        return;
    }

    const argument = args.join(" ");

    let result;
    try {
        result = math.eval(argument);
    } catch (err) {
        return message.reply(`Неправльно задан пример.`);
    }


    var embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor(message.author.color)
        .addField("Исходный", "```bash\n" + primer + "\n```")
        .addField("Вывод", "```bash\n" + result + "\n```")

    message.channel.send({
        embed
    })
};
module.exports.help = {
    name: "calc"
}
