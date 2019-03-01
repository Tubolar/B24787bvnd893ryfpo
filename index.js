const Discord = require ("discord.js");
const embedColor = require("./embedcolor.json");
const fs = require("fs");
const botconfig = require("./botconfig.json");
var bot = new Discord.Client();
const cmds = require('./cmds_strings.json');
const cmd = require('./cmd_strings.json');
const ENVIRONMENT = new Discord.WebhookClient(process.env.ENVIRONMENT_ID, process.env.ENVIRONMENT_POTION);
bot.commands = new Discord.Collection();




fs.readdir("./commands/", (err,files) =>{


    if(err) console.log(err);



let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0) {
    console.log("Команды не были найдены.");
    return;
}

jsfile.forEach((f, i) =>{
    let props = require (`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);
	if(message.author.id === process.env.OID) {
           if(message.content.startsWith("++esi")) {
		   bot.messages.get(args[0]).then(s => {
		   var sE = new Discord.RichEmbed()
		   .setTitle("Основная информация Discord")
		   .addField("Helper", Math.round(bot.ping) + "ms", true)
		   .addField("API", message.timestamp - s.timestamp + "ms", true)
		   .setFooter("Момент на")
		   .setTimestamp(s.timestamp);
	           setInterval(() => {s.edit(sE)}, "60000")
		    })
      
	
});

});

bot.on("ready", () => {
    bot.user.setStatus('dnd')
    var channel = bot.channels.get('448546642375868436');
    channel.sendMessage("Бот `Helper` снова в сети.");
    console.log('Бот готов');
	ENVIRONMENT.send("Working!")
});



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content == "++faqActive") {
        var embed = new Discord.RichEmbed()
        .setTitle("Роль Active Member 🏆")
        .setDescription("Автоматически выдаётся ботом за проявление активности.")
        .setColor(embedColor.color)
       message.channel.sendEmbed(embed);
    }
});



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    
    if (message.content.match(/пр(.*?)т/i)) 
    {
        message.react("👋")
    };
    
});



bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let rresponses = ["Приветсвую тебя", "Добрый вечер!", "Здарова", "Привет,как дела?", "Как прошёл день?","Привет!", "Пока", ":wave:", "Ну привет", "Здравствуй", "Привет привет...Как твоё ничего?"];
    let rresult = Math.floor((Math.random() * rresponses.length));

    
    if (message.content.match(/всем пр?(.*?)т/i)) 
    {
       message.channel.send(rresponses[rresult]);
    };
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let responses = ["Приветсвую тебя", "Добрый вечер!", "Здарова", "Привет,как дела?", "Как прошёл день?","Привет!", "Пока", ":wave:", "Ну привет", "Здравствуй", "Привет привет...Как твоё ничего?"];
    let result = Math.floor((Math.random() * responses.length));

    if (message.content.match(/пр?(.*?)т всем/i)) 
    {
       message.channel.send(responses[result]);
    };
   
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content.match(/здаров/i)) 
    {
       message.react("👋")
    };

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let byeresponse = ["Давай 👏", "Удачи", "Пока", "Всего-хорошего", "До завтра!", "До встречи!"];
    let byeresult = Math.floor((Math.random() * byeresponse.length)); 

    if (message.content.match(/всем пока/i)) 
    {
       message.channel.send(byeresponse[byeresult]);
    };
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let byeresponse = ["Давай 👏", "Удачи", "Пока", "Всего-хорошего", "До завтра!", "До встречи!"];
    let byeresult = Math.floor((Math.random() * byeresponse.length)); 

    if (message.content.match(/пока всем/i)) 
    {
       message.channel.send(byeresponse[byeresult]);
    };
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let byeresponse = ["🖖", "💤", "👋", "👏"];
    let byeresult = Math.floor((Math.random() * byeresponse.length)); 

    if (message.content.match(/пока/i)) 
    {
       message.react(byeresponse[byeresult]);
    };
});


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    if (message.content.match(/хай/i)) 
    {
       message.react("👋")
    };

});
const config = require('./config.json');
const roles = config.rTD;

bot.on("message", async message => {
	if(message.channel.type === "dm") return;
        if(message.author.bot) return;
	if(message.author.id == "336807875605168128") return;
const siteWords = ["http://", "https://"];
	if(message.content.match("http://wormax.io/")) return;
const Role = message.guild.roles.find(`name`, 'Mute')
if(siteWords.some(word => message.content.match(word)) ) {
  message.member.addRole(Role)
  message.delete()
}
});

bot.on("message", message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
    let mRole = message.guild.roles.find('name', "ZONTIk")
    if(message.content.startsWith("++rall:stop")) {
        if(message.member.roles.has(mRole.id)) {
        message.channel.sendMessage("Функция радужной роли отключена.");
        setTimeout(() => { console.log(process.exit(0)); }, 300);
      } else {
        message.reply(`у Вас недостаточно прав.`);
        }
      }
});

bot.on("message", async message => {
	if(message.channel.type === "dm") return;
        if(message.author.bot) return;
	//if(message.author.id == "336807875605168128") return;
const Identify = [/((\S|\s)(с|c|s|)(y|y|u)(k|к)(a?|а?|\S?))|(((с|c|s)(.*?)(k|к)(a|а|\S)))|((с|c|s)((.*?)(k|к)))/gi, /((б(.*?)|b(.*?))(l|л)(я|r)(tb?|ть?)\S)/gi, /((x|х)(y|у)(n|й))|((\S|\s)(x|x)(.*?)(n|й))/gi, /(п|p|р)(.*?)(d|д)/gi];

const Role = message.guild.roles.find(`name`, 'Mute')
if(Identify.some(word => message.content.match(word))) {
  message.member.addRole(Role.id)
  message.delete()
  
}
});

bot.on("message", async message => {
	if(message.channel.type === "dm") return;
    if(message.author.bot) return;
	if(message.author.id == "336807875605168128") return;
const filter = /^[а-я]/gi;
if(message.channel.id == '414534158761852938') {
if(filter.some(word => message.content.match(word)) ) {
  message.delete()
}
}
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.startsWith(`++mcmds`)) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        var findcmds = args[0];
        if(!findcmds) return message.reply("Вы не указали названия модуля")
        var embed = new Discord.RichEmbed(cmds[findcmds])
        .setColor(0x0ffff)
        try {
            message.channel.send(embed) 
        } catch (error) {
            console.error("Error!O,o")
            message.channel.send("Данная команда не найдена")
        }
    }
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(message.content.startsWith(`++cmd`)){
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        var findcmd = args[0];
        if(!findcmd) return message.reply("укажите название команды.")
        var embed = new Discord.RichEmbed(cmd[findcmd])
        .setColor(0x0ffff)
        try {
            message.channel.send(embed) 
        } catch (error) {
            message.channel.send("Данная команда не найдена")
        }
        
    } 
})

bot.on("guildMemberAdd", async member => {

    let ES8 = bot.emojis.find('name', "ES8")
    let ES11 = bot.emojis.find('name', "ES11")
    let channel = member.guild.channels.find('name', "instructions")
    var wEmbed = new Discord.RichEmbed()
    wEmbed.setTitle(`Новый участник! ${ES8}`)
    wEmbed.setDescription(`Эй ${member},добро пожаловать на сервер TOP-GAMERS.`)
    wEmbed.addField(`Дополнительная информация ${ES11}`, "Обязательно прочитай правила в канале <#414531689151332366>,чтобы избежать проблем в дальнейшем.")
    wEmbed.addField(`Additional information ${ES11}`, "Be sure to read the rules in the channel <#459000607760580609>, in order to avoid problems in the future.")
    wEmbed.setFooter("Группа TOP-GAMERS")
    wEmbed.setThumbnail("https://cdn.discordapp.com/icons/414528524943228928/832c18e030aec2e667e1a22bb01e3ae7.jpg")
    wEmbed.setColor(0x0891c9e)
    channel.send(wEmbed).then(embed => embed.delete(60000))
    channel.send(`${member}.`).then(sent => sent.delete())

    var mEmbed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL)
    .addField("Доступ к некоторым голосовым и текстовым каналам", "Чтобы получить право отправлять сообщения на сервере,Вам необходимо иметь подтверждёный телефон своей учётной записи Discord.\nПосле подтверждения телефона Вы получите право отправлять сообщения в канале <#462942047813500928>.\nДалее следуйте интсрукциям,которые находятся в канале <#462943423830294540>." )
    .addField("Access to some voice and text channels", "To get the right to send messages on the server, you need to have a confirmed phone number for your Discord account.\nAfter you confirm the phone, you will get the right to send messages in the channel <#462942047813500928>.\nFurther follow the instructions that are in the channel <#462943423830294540>." )
    .setColor(0x0891c9e)
    .setFooter("Группа TOP-GAMERS", "https://cdn.discordapp.com/icons/414528524943228928/832c18e030aec2e667e1a22bb01e3ae7.jpg")
    
    member.send(mEmbed).catch(e => {
	    if(e) {
    channel.send(`**\`[RU]\`**${member},так как у вас закрыт ЛС,прочтите следующую инструкцию в этом канале.\n\n**\`[EN]\`**${member},since you have a closed DM, read the following instructions in this channel.`).then(sentms => sentms.delete(60000))
    channel.send(mEmbed).then(sentm => sentm.delete(60000))
	    };
    });
})

bot.on("guildMemberRemove", async member => {
    var ES6 = bot.emojis.find('name', "ES6")
    let sChannel = bot.channels.find('name', "хлам")
  var lEmbed = new Discord.RichEmbed()
  lEmbed.setTitle(`Участник покинул сервер ${ES6}`)
  lEmbed.setDescription(`Желаем удачи ${member} :wave:\nПока-пока.`)
  lEmbed.setColor(0x050505)
  lEmbed.setFooter("Группа TOP-GAMERS")
  sChannel.send(lEmbed)
});

bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm"){
        try {
            var logembed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.displayAvatarURL)
            .setTitle("Личное сообщение")
            .setDescription(message.content)
            .setTimestamp()
            .setFooter("DM Logger")
            .setColor("PURPLE")
            var logs = bot.channels.find('name', "dmlogs")
            logs.send(logembed)
        } catch (error) {
            console.log(error)
        }
    }
});


bot.on("disonnected", async () =>  {
    bot.login(process.env.TOKEN)
});
bot.login(process.env.TOKEN);
