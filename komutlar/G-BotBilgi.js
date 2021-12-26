const Discord = require("discord.js");

exports.run = async (client, message) => {
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

  const botbilgi = new Discord.MessageEmbed()
    .setAuthor(`Vasıfsız Bot | Discord Bot Bilgi Tablosu`)
    .setFooter(` ©️ 2021 Vasıfsız Bot | Geliştirici, jr_dos#9341 adlı kişidir. Bu kişiden başka geliştirici yoktur!`, client.user.avatarURL())
    .setTitle(``)
    .setImage("https://cdn.discordapp.com/attachments/856940318237524023/858367307360239647/standard_1.gif")
    .setColor("#ffffff")
    .setDescription(
      `Vasıfsız Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      "__**Bot Verileri**__",
      `**Toplam Sunucu** **|**  \`${
        client.guilds.cache.size
      }\` \n**Toplam Kullanıcı** **|** \`${client.guilds.cache
        .reduce((a, b) => a + b.memberCount, 0)
        .toLocaleString()}\` \n**Toplam Kanal** **|** \`${
        client.channels.cache.size
      }\``
    )
    .addField(
      "__**Botun Sahibi**__",
      "**Bot Sahibi**  <@461524616989507594> \n\n"
    )
    .addField(
      "__**Sürümler**__",
      `**Discord.js Sürümü** **|**  \`v${Discord.version}\` \n   **Node.js Sürümü** **|**  \`${process.version}\``
    )
    .addField(
      "__**Gecikmeler**__",
      `\`${client.ws.ping}\` **MS**`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `\`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n  \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n  \`${prefix}iletişim\` | Vasıfsız Bot İletişim Bilgileri.`
    ); 
  
  return message.channel.send(botbilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "",
  usage: ""
};
