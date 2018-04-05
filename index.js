const Discord = require ("discord.js");

const TOKEN ="NDI1MzQxMDU0ODc5OTI0MjI0.DZGNdw.DshsvSQwIOs6JrS7-6I9eQ7DE_k";

var bot = new Discord.Client();

bot.on("ready", () => {
    bot.user.setStatus('online')
    bot.user.setGame('c кем-то', 'https://www.twitch.tv/nasa/')
    var servers = bot.guilds.array().map(g => g.name).join('.');
    console.log('Бот готов');
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Привет бот") {
        message.channel.sendMessage("Здарова,как жизнь?");
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Бот,что делаешь?") {
        message.channel.sendMessage("Подчиняюсь твоим командам xD");
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Бот,как дела") {
        message.channel.sendMessage("Как сметана бела");
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Инфа") {
        var embed = new Discord.RichEmbed()
        .addField("Пока что я на стадии разработки", "-,-")
        .addField("Скоро будет бомба(но это не точно)","version 1.1.1312, Создатель:ȤȬŇŢįꝅ")
        .setThumbnail("https://media2.giphy.com/media/l3vR16pONsV8cKkWk/giphy.gif")
        .setColor(0xcca300)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+link") {
        var embed = new Discord.RichEmbed()
        .setTitle("Ссылки для игры:")
        .setDescription("http://wormax.io/?party=TOP-GAMERS1                                                               http://wormax.io/?party=TOP-GAMERS2                                                               http://wormax.io/?party=TOP-GAMERS3   ")
        .setFooter("Группа TOP-GAMERS")
        .setColor(0x4d4dff)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Бот,помоги") {
        message.channel.sendMessage(message.author.toString() + ",мой префикс `.+`");
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+help") {
        var embed = new Discord.RichEmbed()
        .addField("Рабочие команды ", "⌨️")
        .addField(".+help","Список команд")
        .addField(".+link","Коммандные ссылки для игры wormax.io")
        .addField(".+avatar", "Ваш аватар")
        .addField(".+aboutme", "Информация о вас")
        .setColor(0x330033)
        .addField(".+serverinfo", "Информация о сервере")
        .addField(".+game", "Информация об играх с ботом")
        .addField(".+rules", "Бот отправит Вам личным сообщением правила нашего сервера")
        .setFooter("Helper bot ©2018 ")
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+avatar") {
        var embed = new Discord.RichEmbed()
        .setImage(message.author.avatarURL)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+aboutme") {
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .setDescription("Информация о вас")
        .addField("Участник" , message.author.username )
        .addField("Вы были приглашены", message.member.joinedAt )
        .addField("Ваш ID", message.author.id )
        .addField("Ваш аккаунт был создан", message.author.createdAt)
        .setColor(0x0080ff)
        
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+serverinfo") {
        var embed = new Discord.RichEmbed()
        .setTitle("Информация о сервере")
        .addField("Имя сервера", "TOP-GAMERS")
        .setThumbnail("https://riki.dotabuff.com/t/l/EaDa0Wt2Rt.png")
        .addField("Дата создания", message.guild.createdAt)
        .addField("Вы были приглашены", message.member.joinedAt)
        .addField("Количество участников", message.guild.memberCount, true)
        .addField("ID сервера", message.guild.id, true)
        .addField("Регион сервера", message.guild.region, true)
        .addField("Создатель", message.guild.owner, true)
        .setColor(0x00994d)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Слово") {
        var embed = new Discord.RichEmbed()
        .addField("Количество букв", Math.floor(Math.random() * 12 + 1  ))
        .setColor(0xff9966)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+faqActive") {
        var embed = new Discord.RichEmbed()
        .setTitle("Роль Active Member 🏆")
        .setDescription("Автоматически выдаётся ботом за проявление активности.")
        .setColor(0x66ff66)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+gameword") {
        var embed = new Discord.RichEmbed()
        .setTitle("Игра в слово 🎲")
        .setDescription("Будет выпадать случайное число,которое обозначает количество букв в слове или аббревиатуре.Вам будет нужно его подобрать.")
        .setColor("0xffffff")
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+game") {
        var embed = new Discord.RichEmbed()
        .setTitle("Игры с ботом 🎮")
        .addField("Игра в Слово", "Будет выпадать случайное число,которое обозначает количество букв в слове или аббревиатуре.Вам будет нужно его подобрать.")
        .addField("Игра в Вычисление", "Вам будет дана цепочка чисел с арифметическими действиями(Пример короче) Вам нужно будет его решить.")
        .addField("Подробнее узнать о каждой игре можно с помощью следующих команд:", ".+gameword-подробная информация об игре Слово      .+gamemath-подробная информация об игре в Вычисления                       .+gamenum-подробная информация об игре Ряд чисел")
        .setFooter("Раздел: Игры; Helper bot 2018 ©")
        .setColor("0xff1a1a")
        .setThumbnail("http://aarp.cdn.arkadiumhosted.com/4.0-aarp/Content/Images/default/600x600_gameicon.jpg")        
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+gamemath") {
        var embed = new Discord.RichEmbed()
        .setTitle("Игра в Вычисление ➕ ➖")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLN1gSWD0BSCBRGWXBsNy4tl-Pe4sGl0JcoQdCCc4ELv8UTo3") 
        .addField("Для того чтобы начать игру существует следующая команда", "Вычисление старт")
        .setDescription("У этой игры существуют следующие уровни сложности:                            1.Легкий                       2.Средний                            3.Сложный                                 4.Максимальный           5.Экстерн                                                                                                                                             Для того чтобы получить новый пример существует команда Пример=(ваш уровень)                                                                                     Бот даст пример с той сложностью,которую вы указали")
        .setFooter("Раздел:Игры Helper bot 2018 ©")
        .addField("Для того чтобы указать уровень сложности существует следующая команда", "Вычисление=(ваш уровень)")     
        .setColor(0x604020)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Вычисление старт") {
        var embed = new Discord.RichEmbed()
        .setTitle("Укажите уровень сложности")
        .setColor(0x008066)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Вычисление=лёгкий") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=лёгкий")
        .setColor(0x66cc00)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Вычисление=средний") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=средний")
        .setColor(0xe6e600)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Вычисление=сложный") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=сложный")
        .setColor(0xff6600)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Вычисление=максимальный") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=максимальный")
        .setColor(0xff3300)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Вычисление=экстерн") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень сложности=экстерн")
        .setColor(0x4d0000)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Пример=лёгкий") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=лёгкий")
        .addField("Число", Math.floor(Math.random() * 12 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 16 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 20 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 8 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 10 + 1  ))
        .setColor(0x66cc00)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Пример=средний") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=средний")
        .addField("Число", Math.floor(Math.random() * 24 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 32 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 40 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 10 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 20 + 1  ))
        .setColor(0xe6e600)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Пример=сложный") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=сложный")
        .addField("Число", Math.floor(Math.random() * 48 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 64 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 80 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 40 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 30 + 1  ))
        .setColor(0xff6600)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Пример=максимальный") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=максимальный")
        .addField("Число", Math.floor(Math.random() * 620 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 980 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 120 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 80 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 500 + 1  ))
        .setColor(0xff3300)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Пример=экстерн") {
        var embed = new Discord.RichEmbed()
        .setTitle("Уровень=экстерн")
        .addField("Число", Math.floor(Math.random() * 620 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 980 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 120 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 80 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 500 + 1  ))
        .addField("Умножить на", Math.floor(Math.random() * 14 + 1  ))
        .addField("Отнять", Math.floor(Math.random() * 1000 + 1  ))
        .addField("Прибавить", Math.floor(Math.random() * 10000 + 1  ))
        .addField("Разделить на", Math.floor(Math.random() * 5 + 1  ))
        .addField("Прибавить к полученному числу сумму следующих чисел", "Сумма чисел")
        .addField("Число 1", Math.floor(Math.random() * 25000 + 1  ))
        .addField("И число 2", Math.floor(Math.random() * 15000 + 1  ))
        .setColor(0x4d0000)
        message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+gamenum") {
        var embed = new Discord.RichEmbed()
        .setTitle("Игра случайное число.")
        .setDescription("Бот будет давать случайное число.Вам нужно будет продолжить ряд,по его типу, т.е если число чётное-значит и ряд будет чётным,тоже самой и с нечётным числом.")
        .setColor(0x00cccc)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Стартовое число") {
        var embed = new Discord.RichEmbed()
        .setDescription(Math.floor(Math.random() * 1500 + 1  ))
        .setColor(0xff80ff)
       message.channel.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+rules") {
        var embed = new Discord.RichEmbed()
        .setTitle("```Правила нашего сервера```")
        .setDescription("```ЗАПРЕЩЕНО:                                                                                         1.Оскорбления,мат,завуалированный мат.                                                                         2.Выяснение отношений (кто прав,кто нет,кто хороший,а кто плохой и т.д).                                                                     3.Спамить,флудить,бессмысленная и не носящая толка информация.(Исключением является чат #spam, но не злоупотреблять.)                                                                                                4.Рекламные сообщения:приглашения на сервер, ссылки на сторонние источники и т.п                                                                                  5.Давать команды ботам,кроме #commands                                                                                 6.Капс(писать заглавными буквами).                                                                        7.Просьба о помощи в игре и т.д.  Для этого есть система личных сообщений.                                                                                             8.Злоупотреблять командами ботов.                                                                                      9.Плагиатить других участников сервера.                                                                                     10.Неуважение к Администрации. Обсуждение действий Администрации и Модераторов.```")
        .setFooter("С уважением, Администрация TOP-GAMERS")
        .setColor(0x009900)
        .setThumbnail("http://www.21stcenturymom.com/wp-content/uploads/2017/06/rules-1752536_960_720.png")
        message.author.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+rules") {
        message.channel.sendMessage(message.author.toString() + ",проверь свои личные сообщения! :wink: ");
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+roles") {
        var embed = new Discord.RichEmbed()
        .setTitle("Роли нашего сервера")
        .setDescription("```1.Гость. Автоматически выдаётся ботом.                                                                        2.Посетитель. Выдаётся проявляющим активность участникам                                                                                                        3.BOTS. Выдаётся соответственно только ботам                                                                                                       4.Group  🔑. Выдаётся определенным участникам (Не выпрашивать!)                                                                            5.Girl. Выдаётся участникам,которые являются представителями женского пола                                                                                                   6. Moderator. Модераторы                                                                                                      7.Admin. Администратор сервера.                                                                                                                              8.Deputy Owner. Заместитель владельца.                                                                                                                9.Active Member 🏆(Активный участник). Выдаётся автоматически ботом за 25 уровень                                                                                                        10.Watching(Наблюдение). Наблюдающие за чистотой и порядком сервера```")
        .setFooter("Администрация TOP-GAMERS")
        .setColor(0x008080)
        .setThumbnail("http://roles.com.br/wp-content/uploads/2014/02/Roles-Logo-Home.png")
       message.author.sendEmbed(embed);
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+roles") {
        message.channel.sendMessage(message.author.toString() + ",чекни ЛС :wink: ");
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Всем привет") {
        message.react('👋');
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == "Всем привет)") {
        message.react('👋');
    }
});

bot.on("message", function(message) {
    if(message.author.equals(bot.user)) return;

    if (message.content == ".+ping") {
        message.reply(`Мой отклик составляет ${Math.round(bot.ping)} мc`);
    }
});

bot.login(TOKEN);
