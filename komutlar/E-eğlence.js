const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedeğlence = new Discord.MessageEmbed()
    .setAuthor(`Vasıfsız Bot | Eğlence Menüsü`)
    .setTitle(``)
    .setImage("https://cdn.discordapp.com/attachments/856940318237524023/858367307360239647/standard_1.gif")
    .setColor("#ffffff")
    .setDescription(
      `Vasıfsız  Botu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Steam Oyun__`,
      `\`${prefix}steamoyun [Oyun]\` Yazdığın oyun eğer steamde bulunuyorsa oyunun bilgilerini verir.`,
      true
    )
    .addField(
      `__Minecraft Ödül__`,
      `\`${prefix}mcödül \` Yazdığın cümleyi minecraft ödülüne aktarır.`,
      true
    )
    .addField(
      `__TKM__`,
      `\`${prefix}tkm [Seçtigin] \` Bot ile taş , kağıt ve makas oynarsın.`,
      true
    )
    .addField(
      `__Kasa Aç__`,
      `\`${prefix}kasaaç \` CS:GO ,kasası açar.`,
      true
    )
    .addField(
      `__Trump Tweet__`,
      `\`${prefix}trumptweet [Yazı] \` Trump'a Twitter üzerinden yazı yazdırırsın.`,
      true
    )
    .addField(
      `__Zar At__`,
      `\`${prefix}zarat \` 1 'den 5'e kadar Zar Atar.`,
      true
    )
  .addField(
      `__Deste Aç__`,
      `\`${prefix}desteaç \` Zula deste kasası açar.`,
      true
    )
   .addField(
      `__Minecraft Skin__`,
      `\`${prefix}mcskin \` Minecraft skini arar.`,
      true
    )
   .addField(
      `__Ata Sözü__`,
      `\`${prefix}atasözü \` Ata sözü söyler.`,
      true
    )
  .addField(
      `__Ara155__`,
      `\`${prefix}ara155 \` Polisi Ararsınız. (gerçek değildir!)`,
      true
    )
  .addField(
      `__Ali Vefa__`,
      `\`${prefix}alivefa \` Sunucunudaki Ali Vefayı gösterir.`,
      true
    )
  return message.channel.send(embedeğlence);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eğlence",
  description: "Eğlence Menüsü",
  usage: "eğlence"
};
