const Discord = require("discord.js");
const weather = require ("weather-js");
 
module.exports.run = async (bot, message, args) => {

    weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
        if (err) message.channel.send(err);

        var current = result[0].current;
        var location = result[0].location
        const weEmbed = new Discord.RichEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Погода для ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor(0x00cc99)
        .addField("Часовой пояс", `UTC${location.timezone}`, true)
        .addField("Тип измерения температуры", location.degreetype, true)
        .addField("Температура", `${current.temperature}F`, true)
        .addField("Как будто", `${current.feelslike}F`, true)
        .addField("Направление ветров", current.winddisplay, true)
        .addField("Влажность", `${current.humidity}%`, true)

        message.channel.send(weEmbed)
    });
}

module.exports.help = {
    name: "we"
}
