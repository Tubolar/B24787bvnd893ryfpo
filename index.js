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

/*var usage = "`++hangman <ID канала> <ваша фраза>`\n`Пример: ++hangman 368845035560763402 pelmeni`"
var letters = ["🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯", "🇰", "🇱", "🇲", "🇳", "🇴", "🇵", "🇶", "🇷", "🇸", "🇹", "🇺", "🇻", "🇼", "🇽", "🇾", "🇿"];
var unicode = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var games = [];

var stages = [`\`\`\`
/---|
|   
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|
|
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|   |
| 
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|  /|
|
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|  /|\\
|
|
\`\`\`
`, `\`\`\`
/---|
|   😲
|  /|\\
|  /
|
\`\`\`
`, `\`\`\`
/---|
|   😲 ~ Вы проиграли,игра окончена.
|  /|\\
|  / \\
|
\`\`\`
`];

function generateMessage(phrase, guesses) {
	var s = "";
	for(var i = 0; i < phrase.length; i++) {
		if(phrase[i] == ' ')
			s += " ";
		else {
			var c = phrase[i];
			if(guesses.indexOf(c) == -1)
				c = "\\_";
			s += "__" + c + "__ ";
		}
	}
	return s;
}

function nextLetter(message, index, word) {
    message.react(letters[index]).then(r => {
		index++;
		if(index < letters.length) {
			if(index == 13) {
				message.channel.send(generateMessage(word, [])).then(m => {
					games.push({
						stage: 0,
						msg0: message,
						msg1: m,
						phrase: word,
						guesses: []
					});
					nextLetter(m, index);
				});
			} else {
				nextLetter(message, index, word);
			}
		}
	});
}

bot.on('messageReactionAdd', (reaction, user) => {
	var msg = reaction.message;
	if(!user.bot) {
		for(var i = 0; i < games.length; i++) {
			var game = games[i];
			if((msg.id == game.msg0.id || msg.id == game.msg1.id) && game.stage < stages.length) {
				var letter = unicode[letters.indexOf(reaction.emoji.name)];
				
				reaction.fetchUsers().then(usrs => {
					var reactors = usrs.array();
					var remove_next = function(index) {
						if(index < reactors.length)
							reaction.remove(reactors[index]).then(() => remove_next(index + 1));
					};
					
					remove_next(0);
				});
				
				if(game.guesses.indexOf(letter) == -1) {
					game.guesses.push(letter);
					if(game.phrase.indexOf(letter) == -1) {
						game.stage ++;
						game.msg0.edit(stages[game.stage]);
					} else {
						var sik = true;
						for(var j = 0; j < game.phrase.length; j++) {
							var c = game.phrase[j];
							if(c != ' ' && game.guesses.indexOf(c) == -1) {
								sik = false;
							}
						}
						
						if(sik) {
                            game.msg0.edit(stages[game.stage].replace("😲", "🙂 ~ Верно!Игра окончена"));
                        }

                        
						game.msg1.edit(generateMessage(game.phrase, game.guesses));
					}
				}
			}
			games[i] = game;
		}
	}
});

bot.on('message', msg => {
    if(msg.content.startsWith("++hangman")) {
        var words = msg.content.split('\n')[0].split(' ');
        if(words.length < 2) {
            msg.reply(usage);
        } else {
            var channel = bot.channels.find('id', words[1]);
			var word = words.slice(2).join(' ').toLowerCase().replace(/[^a-z\s:]/g, '');
            if(channel != null) {
                channel.send(stages[0]).then(m => {
                    nextLetter(m, 0, word);
                });
            } else {
                msg.reply("Не могу найти канал с указанным идентификатором `" + words[1] + "` его не существует на данном сервере! \n" + usage);
            }
        }
    }
});*/

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
})

bot.on("message", async message => {
	if(message.channel.type === "dm") return;
        if(message.author.bot) return;
	if(message.author.id == "336807875605168128") return;
const enBadw = [/fack/i, /fuuck/i, /cock/i, /tits/i, /bitc/i, /fuck/i, /gay/i, /sucker/i, /hick/i, /pussy/i, /bich/i, /stup/i, /dick/i, /penis/i, /prosti/i,/tart/i, /fuc/i, /noob/i, /fck/i, /schmuck/i, /paddel/i, /cur/i, /autism/i, /chmo/i, /eb/i, /sosi/i, /xu/i, /nyb/i, /xyesos/i, /lox/i, /typo/i, /sex/i, /секас/i, /секс/i, /sekas/i, /gom/i, /gnid/i, /piska/i, /sis/i, /bomz/i, /boln/i, /aytist/i, /dayn/i, /loh/i, /swinia/i, /plun/i];

const Role = message.guild.roles.find(`name`, 'Mute')
if(enBadw.some(word => message.content.match(word)) ) {
  message.member.addRole(Role)
  message.delete()
  
}
});

bot.on("message", async message => {
	if(message.channel.type === "dm") return;
        if(message.author.bot) return;
	if(message.author.id == "336807875605168128") return;
const enBadw = [/сук/i, /сучк/i, /аморальный/i, /чмо/i, /гей/i, /пид/i, /соси/i, /сись/i, /еб/i, /гнида/i, /паскуда/i, /тупой/i, /лох/i];

const Role = message.guild.roles.find(`name`, 'Mute')
if(enBadw.some(word => message.content.match(word)) ) {
  message.member.addRole(Role)
  message.delete()
  
}
});
bot.on("message", async message => {
	if(message.channel.type === "dm") return;
    if(message.author.bot) return;
	if(message.author.id == "336807875605168128") return;
const filter = [/а/i, /б/i, /в/i, /г/i, /д/i, /е/i, /ё/i, /ж/i, /з/i, /и/i, /й/i, /к/i, /л/i, /м/i, /н/i, /о/i, /п/i, /р/i, /с/i, /т/i, /у/i, /ф/i, /х/i, /ц/i, /ч/i, /ш/i, /щ/i, /ъ/i, /ы/i, /ь/i, /э/i, /ю/i, /я/i]
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
            console.error("Error!O,o")
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
    wEmbed.addField(`Additional information ${ES11}`, "Be sure to read the rules in the channel <#414531689151332366>, in order to avoid problems in the future.")
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
    member.send(mEmbed)
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
