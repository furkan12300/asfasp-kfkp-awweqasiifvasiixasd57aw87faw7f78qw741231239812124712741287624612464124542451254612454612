const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`Vasıfsız Bot | Ayarlar Menüsü`)
    .setTitle(``)
    .setImage("https://cdn.discordapp.com/attachments/856940318237524023/858367307360239647/standard_1.gif")
    .setColor("#ffffff")


    .addField(
      `__ModLog__`,
      `\`${prefix}modlog\` Sunucunuza modlog kanalı ayarlarsınız.`,
      true
    )
    .addField(
      `__KüfürEngel__`,
      `\`${prefix}küfürengel\` Sunucuda küfür etmeye çalışanları engellerim.`,
      true
    )
    .addField(
      `__Küfür Log__`,
      `\`${prefix}küfürlog\` Küfür eden kişilerin mesajı silinir ve ayarlayacağın log kanalına gider.`,
      true
    )
    .addField(
      `__Reklam Engel__`,
      `\`${prefix}reklamengel\` Sunucudanki reklam yapan üyeleri durdurursun.`,
      true
    )
    .addField(
      `__Reklam Log__`,
      `\`${prefix}reklamlog\` Sunucundaki reklam yapan kişinin reklami silinir ve ayarlayacağın log kanlına gider.`,
      true
    )
    .addField(
      `__BanSay__`,
      `\`${prefix}bansay\` Sunucundaki toplam banlanan kişi sayısını gösterir.`,
      true
    )
    .addField(
      `__Sohbet AÇ__`,
      `\`${prefix}sohbet-aç\` Bu komutu kullandığınızda sohbetiniz açılır ve tüm kullanıcılar yazabilir.`,
      true
    )
    .addField(
      `__Sohbet Kapat__`,
      `\`${prefix}sohbet-kapat\` Bu komutu kullandığınızda sohbetiniz kapatılır ve tüm kullanıcılar yazamaz.`,
      true
    )
    .addField(
      `__İsim Değiştir__`,
      `\`${prefix}isimdeğiştir\` Sunucunuzdaki etiketlediğiniz kişinin ismini değiştirirsiniz.`,
      true
    )
    .addField(
      `__Sil__`,
      `\`${prefix}sil\` Sunucunuzda **1-99** rakam arası mesaj siler.`,
      true
    )
    .addField(
      `__Mute__`,
      `\`${prefix}mute\` Sunucunuzda birisini susturursunuz.`,
      true
    )
    .addField(
      `__Güvenlik__`,
      `\`${prefix}güvenlik\` Güvenlik kanalını ayarlarsın.`,
      true
    )
    .addField(
      `__Güvenlik Sıfırla__`,
      `\`${prefix}güvenlik-sıfırla\` Güvenlik kanalını sıfırlarsın.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `>  » [Destek Sunucusu](https://discord.gg/nBuVkMrvMF) \n>  » [Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=856940956598927400&scope=bot&permissions=8)`
    );
  return message.channel.send(embedayarlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ayar",
  description: "Ayarlar Menüsü",
  usage: "ayar"
};
