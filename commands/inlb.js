const Discord = require("discord.js");
const table = require("table");
const arraySort = require("array-sort");
module.exports.run = async (bot, message, args) => {

    let invs = await message.guild.fetchInvites();
    invs = invs.array();
    arraySort(invs, 'uses', { reverse: true});
    let strings = [['Участник', 'Использований']];
    invs.forEach(function(inlb){
        strings.push([inlb.inviter.username, inlb.uses]);
        var builder = new Discord.RichEmbed()
        builder.setTitle("Таблица приглашений")
        builder.setDescription("```bash\n" + table.table(strings) + "\n```")
        builder.setColor(0x0ffff);
        message.channel.send({embed: builder})
    })
}
    
module.exports.help = {
    name: "inlb"
}
