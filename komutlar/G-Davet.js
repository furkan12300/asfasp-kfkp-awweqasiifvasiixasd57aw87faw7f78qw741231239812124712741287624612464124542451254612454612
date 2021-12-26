const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const fynxcode = new Discord.MessageEmbed()
    .setColor("#ffffff")
    .setAuthor(`Vasıfsız Bot Davet Menüsü`)
    .setDescription(
      `**Botun Davet Linki [TIKLA](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**\n\n**__Web Sitemiz Çok Yakında Sizlerle__**`
    )
   .setImage("https://cdn.discordapp.com/attachments/856940318237524023/858367307360239647/standard_1.gif")

  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Davet Menüsü",
  usage: ""
};





