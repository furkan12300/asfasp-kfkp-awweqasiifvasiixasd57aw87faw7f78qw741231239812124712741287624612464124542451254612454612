const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = process.env.prefix;

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`Vasıfsız Bot | Çekiliş Menüsü `)
    .setTitle(``)
    .setColor("#ffffff")
    .setImage("https://cdn.discordapp.com/attachments/717123467086135317/860605596029026335/vasifsiz.gif")
  
    .addField(
      `__Başlat__`,
      `\<a:vasifsizcekilis:860601863958036570>  v!başlat Sunucuda Bir Çekiliş Başlatabilirsin.`,
      true
    )
   .addField(
      `__Yenile__`,
      `\<a:vasifsizcekilis:860601863958036570>  v!reroll Çekilişi Yeniden Çeker.`,
      true
    )
    .addField(
      `__Sonlandır__`,
      `\<a:vasifsizcekilis:860601863958036570> v!sonlandır Çekilişi Bitirir.`,
      true
    )
   
    .addField(
      `\<a:vasifsizcekilis:860601863958036570> **Linkler;**`,
      `>  » [Destek Sunucusu](https://discord.gg/nBuVkMrvMF) \n>  » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=856940956598927400&scope=bot&permissions=8)`
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "çekiliş",
  description: "Çekiliş Menüsü",
  usage: "çekiliş"
};
