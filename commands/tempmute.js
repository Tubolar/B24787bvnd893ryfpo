const Discord = require("discord.js");
const ms = require("ms")
module.exports.run = async (bot, message, args) => {
    
    

    let tomute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply(",не могу найти участника");
    if(tomute.roles.has(message.guild.roles.find("name", "Moderator").id)) return message.reply(":face_palm:");
    let muterole = message.guild.roles.find(`name`, "Mute");
    let mutetime = args[1];
    if(!mutetime) return message.reply(",Вы не указали время");
                var randomTime = Math.floor(Math.random() * (7 - 1) + 1);
                var randomTime2 = Math.floor(Math.random() * ["m", "h", "d"].length);
                var random2T = ["m", "h", "d"][randomTime2];
                
                var PartOfTotal = (randomTime + " " + random2T);
                var ToSend = PartOfTotal.replace(/m/i, "м").replace(/h/i, "ч").replace(/d/i, "д");

    let modRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(modRole.id)) {
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> получил запрет на **разговор в текстовых каналах на **${ms(ms(mutetime))}`);
    }else {
        message.channel.send(`Ну что же,некая особа <@${message.author.id}>,за твоё нефиг делать я даю тебе мут на \`дай-ка подумаю...\``).then(sent => {
            setTimeout(() => {
                sent.edit(`Ну что же,некая особа <@${message.author.id}>,за твоё нефиг делать я даю тебе мут на \`${ToSend}.\``)
                .then(message.member.addRole(muterole.id))
            }, "30000")  
        }).then(setTimeout(() => {
            message.member.removeRole(muterole.id)
        }), ms(randomTime + random2T)) 
    };
    let moddRole = message.guild.roles.find("name", "Moderator");
    if(message.member.roles.has(moddRole.id)) {
    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`пользователь <@${tomute.id}> снова может писать сообщения в текстовых каналах.`);
    }, ms(mutetime));
}
} 

module.exports.help = {
    name: "tempmute"
}
