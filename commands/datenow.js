const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    var date = new Date()
    const day_strings = {
        Mon: "Понедельник",
        Tue: "Вторник",
        Wed: "Среда",
        Thu: "Четверг",
        Fri: "Пятница",
        Sat: "Суббота",
        Sun: "Воскресенье" 
    }
    const months_strings = {
        Jan: "Января",
        Feb: "Февраля",
        Mar: "Марта",
        Apr: "Апреля",
        Jun: "Июня",
        Jul: "Июля",
        Aug: "Августа",
        Sep: "Сентября",
        Oct: "Октября",
        Nov: "Ноября",
        Dec: "Декабря"
    }

    const months_images = {
        Jan: "http://source-energyofhome.ru/wp-content/uploads/2018/01/055-600x405.jpg",
        Feb: "http://raum-fuer-innere-entfaltung.at/wp-content/uploads/2017/02/winter01.jpg",
        Mar: "https://cdn2.tu-tu.ru/image/source/4/12aaedf0a3897668ef59d57011e368b9/",
        Apr: "https://images.aif.ru/013/231/c2e5ea64e50911dcd9f1049c5df2d25f.jpg",
        Jun: "https://cdn.pixabay.com/photo/2016/06/02/22/38/june-1432325_960_720.jpg",
        Jul: "http://pozdravlenja.ucoz.ru/iul98047-1680x1050.jpg",
        Aug: "https://www.stihi.ru/pics/2015/08/01/1610.jpg",
        Sep: "http://source-energyofhome.ru/wp-content/uploads/2018/01/055-600x405.jpg",
        Oct: "https://novostivmire.com/wp-content/uploads/2016/09/297943_www.Gde-Fon.com_.jpg",
        Nov: "https://img.7dach.ru/image/600/00/00/48/2017/08/18/af56a0.jpg",
        Dec: "http://zonatigra.ru/images/Goroskop/dekabr/prognoz_na_dekabr-b.jpg"
    }

    const c_thumb = {
      1: "http://pro-chislo.ru/data/moduleImages/Numbers/1/39567b7ea5fee828edba4faf3259c49d.png",
      2: "http://pro-chislo.ru/data/moduleImages/Numbers/2/d937ba778afd00ba3748b6d3bcf8a4a7.png",
      3: "http://pro-chislo.ru/data/moduleImages/Numbers/3/f7a704af7e4e84d4f4d97e0b39d3c784.png",
      4: "http://pro-chislo.ru/data/moduleImages/Numbers/4/97f9ac7d2b50eba89c4a8b3abbf54f7e.png",
      5: "http://pro-chislo.ru/data/moduleImages/Numbers/5/17b210e6aa4ba5749c62466c0554a6f8.png",
      6: "http://pro-chislo.ru/data/moduleImages/Numbers/6/ba9d895f4fc5fa88c43e76f0d1f78c7d.png",
      7: "http://pro-chislo.ru/data/moduleImages/Numbers/7/623ba103ffb1818fdc0917b50fcd5fec.png",
      8: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/8/a8728157d46fc6f8a0d4f86fb1999be9.png100x100.png",
      9: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/9/d1aafc56ff46a1ca36fa6b0e498d5172.png100x100.png",
      10: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/10/07438836508eaa0339c439f01c8531a3.png100x100.png",
      11: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/11/9634e3f647c1360c8cbd5bdaca781713.png100x100.png",
      12: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/12/43a47ad7d5f9366b71505673d370dd08.png100x100.png",
      13: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/13/fe5428083b052b6a43070cdee35c1826.png100x100.png",
      14: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/14/0596f43e43d728ece386d02f010c989e.png100x100.png",
      15: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/15/82eda4eaf51e51f96fca6f3ac874d2ca.png100x100.png",
      16: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/16/95ba7a5cd19459952a2f4bbc6ceb5117.png100x100.png",
      17: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/17/901e222d34765e16eababfa2b98a5a00.png100x100.png",
      18: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/18/c3c782a54010750238260f8ecb8a1ee6.png100x100.png",
      19: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/19/5d4146ad9567fe66fa3578cd29e5c6ca.png100x100.png",
      20: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/20/02b956eecd80b6a78e11b443b1287877.png100x100.png",
      21: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/21/bdebd67f86a1d00eeef17013b643521a.png100x100.png",
      22: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/22/65794f29f136c7bf4c14ff9a39cd727b.png100x100.png",
      23: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/23/6292ce08d4b5e024659c4adc75d9b7ca.png100x100.png",
      24: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/24/839d711ae94f511db4132124d5da553c.png100x100.png",
      25: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/25/f060e66c262bcb7aa3fcc3694ed4e584.png100x100.png",
      26: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/26/2c09a574e3c2a5f787502190227f1f1b.png100x100.png",
      27: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/27/270888bb2843a6d78c2c0fe2a242fabd.png100x100.png",
      28: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/28/c8427dd5eafff2784e4ddb2e1eb21944.png100x100.png",
      29: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/29/3920d251667cd013472c10f1b26d8ecd.png100x100.png",
      30: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/30/4e9f36f3ad97c6a36cbf4f03f1a48dd5.png100x100.png",
      31: "http://pro-chislo.ru/data/thumbs/data/moduleImages/Numbers/31/e9acfbf14c6d4e1da256a1e59a482236.png100x100.png"
    }
    let D = date.toString().split(" ")[0]
    let M = date.toString().split(" ")[1]
    let C = date.toString().split(" ")[2]
    let Y = date.toString().split(" ")[3]
    let T = date.toString().split(" ")[4]

    var embed = new Discord.RichEmbed()
    .setTitle("Точная дата и время")
    .setDescription(`${day_strings[D]} ${C} ${months_strings[M]} ${Y} года.\n\n**Время:** \`${T}\``)
    .setThumbnail(`${c_thumb[C]}`)
    .setImage(`${months_images[M]}`)
    .setColor(0x0ffff)
message.channel.send(embed)
}

module.exports.help = {
    name: "timepls"
}
