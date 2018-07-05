const Discord = module.require("discord.js");
const { RichEmbed } = module.require("discord.js");
const ms = module.require("ms");
module.exports.run = async (bot, message, args) => {
            let ctx = args.join(" ").replace(/\n/g, "\\n");
            let builder = new RichEmbed()
            let builder_footer = ctx.match(/{footer:(.*?)( \+ icon_url: ?(.*?))?}/i);
            if (builder_footer !== null) {
                builder.setFooter(builder_footer[1], builder_footer[3])
            }
            let builder_img = ctx.match(/{image: ?(.*?)}/i);
            if (builder_img !== null) {
                builder.setImage(builder_img[1]);
                
            }
            let builder_thumbnail = ctx.match(/{thumbnail: ?(.*?)}/i);
            if (builder_thumbnail !== null) {
                builder.setThumbnail(builder_thumbnail[1]);
            }
            let builder_author = ctx.match(/{author:(.*?)( \+ icon_url: ?(.*?))?( \+ url: ?(.*?))?}/i);
            if (builder_author !== null) {
                builder.setAuthor(builder_author[1], builder_author[3], builder_author[5])
            }
            let builder_title = ctx.match(/{title:(.*?)}/i);
            if (builder_title !== null) {
                builder.setTitle(builder_title[1])
            }
            let builder_url = ctx.match(/{url: ?(.*?)}/i);
            if (builder_url !== null) {
                builder.setURL(builder_url[1])
            }
            let builder_desc = ctx.match(/{description:(.*?)}/i);
            if (builder_desc !== null) {
                builder.setDescription(builder_desc[1].replace(/\\n/g, '\n'))
            }
            let builder_color = ctx.match(/{color: ?(.*?)}/i);
            if (builder_color !== null) {
                builder.setColor(builder_color[1])
            }
            let builder_date = ctx.match(/{timestamp(: ?(.*?))?}/i);
            if (builder_date !== null) {
                if (builder_date[2] === undefined || builder_date[2] === null)
                builder.setTimestamp(new Date());
                else
                builder.setTimestamp(new Date(builder_date[2]));
            }
            let builder_fields = ctx.match(/{fieldt: ?(.*?) \+ value: ?(.*?)( \+ inline)?}/gi)
            if (builder_fields !== null) {
                builder_fields.forEach((params) => {
                if (params[1] == null || params[2] == null || typeof params[1] === "undefined" || typeof params[2] === "undefined") return message.reply("неправильная форма построения поля(field)");
                let values = params.match(/{fieldt: ?(.*?) \+ value: ?(.*?)( \+ true)?}/i);
                builder.addField(values[1], values[2], (values[3] != null));
            });}
            var time = "6000ms"
            message.channel.send("Генерирую...").then(msg => {

           setTimeout(function(){
                msg.edit(builder)
            }, ms(time))
        })
    }

module.exports.help = {
    name: "build"
}
