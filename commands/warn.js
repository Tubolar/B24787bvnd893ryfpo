const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Нет.Я не могу это сделать");
    let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
    if(!wUser) return message.reply("Не удалось найти");
    if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("Они тоже черезчур");
    let reason = args.join(" ").slice(22);

    if(!warns[wUser.id]) warns [wUser.id] = {
        warns: 0
    };

    warns[wUser.id].warns++;

    fs.writeFile("./warns.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
    });
     let warnEmbed = new Discord.RichEmbed()
     .setDescription("Предупреждения")
     .setAuthor(message.author.username)
     .setColor(0x00cc99)
     .addField("Предупреждённый участник", `<@${wUser.id}>`)
     .addField("Предупреждён в канале", message.channel)
     .addField("Количество предупреждений", warns[wUser.id].warns)
     .addField("Причина", reason);
      
     let warnchannel = message.guild.channels.find(`name`, "moderator");
     if(!warnchannel) return message.reply(",не могу найти канал.");

     warnchannel.send(warnEmbed);

     if(warns[wUser.id].warns == 2) {
         let muterole = message.guild.roles.find(`name`, "Mute");
         if(!muterole) return message.reply(",Вы должны создать роль.");
         
         let mutetime = "86400s";
        await(wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}>получил временный запрет в течении **1440** минут на **разговор** в чатах`);

        setTimeout(function(){
            wUser.removeRole(muterole.id)
            message.channel.send(`<@${wUser.id}>,недавно получивший запрет на **разговор** в чатах,может снова отправлять сообщения.`)
        }, ms(mutetime))
     };

}

module.exports.help = {
    name: "warn"
}
