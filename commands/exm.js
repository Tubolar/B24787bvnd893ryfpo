const Discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
    let num1 = Math.floor(Math.random() * 100 + 1  );
    let num2 = Math.floor(Math.random() * 100 + 1  );
    let num3 = Math.floor(Math.random() * 100 + 1  );
    let num4 = Math.floor(Math.random() * 100 + 1  );
    let num5 = Math.floor(Math.random() * 100 + 1  );

    let symbol1 = ["+", "-", ":", "x"];
    let symresult1 = Math.floor((Math.random() * symbol1.length)); 
    let symbol2 = ["+", "-", ":", "x"];
    let symbolresult2 = Math.floor((Math.random() * symbol2.length)); 
    let symbol3 = ["+", "-", ":", "x"];
    let symbolresul3 = Math.floor((Math.random() * symbol3.length)); 
    let symbol5 = ["+", "-", ":", "x"];
    let symbolresult5 = Math.floor((Math.random() * symbol5.length)); 

    message.channel.send(num1 + symbol1[symresult1] + num2 + symbol2[symbolresult2] + num3 + symbol3[symbolresul3] + num4 + symbol5[symbolresult5] + num5 + "=")

}

module.exports.help = {
    name: "primer"
}
