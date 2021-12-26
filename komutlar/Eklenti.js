const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {
  const sunucu = new Discord.MessageEmbed()
    .setAuthor(`Vasıfsız Bot | Eklenti Menüsü`)
    .setTitle(``)
    .setImage(
      "https://cdn.discordapp.com/attachments/856940318237524023/858367307360239647/standard_1.gif"
    )
    .setColor("#ffffff")
    .setDescription(
      `Vasıfsız Botu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Ticket Sistem__`,
      `\`${prefix}ticket-sistem\` Gelişmiş ayarlanabilir ticket sistemi`,
      true
    )
    .addField(
      `__Seviye Sistem__`,
      `\`${prefix}seviye-sistem\` Gelişmiş Seviye Sistemi`,
      true
    )
    .addField(
      `__OtoRol Sistem__`,
      `\`${prefix}otorol-sistem\` Gelişmiş OtoRol Sistemi`,
      true
    )
    .addField(
      `__ÖzelProfil Sistem__`,
      `\`${prefix}profil-sistem\` Gelişmiş Profil Sistemi`,
      true
    )
    .addField(
      `__Öneri Sistem__`,
      `\`${prefix}öneri-sistem\` Ayarlanabilir Öneri Sistemi`,
      true
    )
    .addField(
      `__Ban Sistem__`,
      `\`${prefix}ban-sistem\` Ayarlanabilir Ban Sistemi`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `\`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n`
    );
  return message.channel.send(sunucu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eklenti",
  description: "Yardım Menüsü",
  usage: "yardım"
};
