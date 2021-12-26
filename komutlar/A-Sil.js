const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
if(isNaN(args[0])) {
  var errembed = new Discord.MessageEmbed()
    .setColor("ffffff")
    .addField(`Yanlış Kullanım!`, `Bir rakam yazmalısın!`)
    .addField(`Doğru Kullanım:`, `${ayarlar.prefix}sil <temizlenecek mesaj sayısı>`)
return message.channel.send(errembed);
}
  
if (args[0] < 1) return message.reply("**1** adetten az mesaj silemem!")
if (args[0] > 99) return message.reply("`❌| 99 Adetten fazla mesaj silemem!`")
  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("Hiç mesaj silemedim! _(**14** günden önceki mesajları silemem!)_");
})
message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setDescription(
        `🗑 | **\`\`${
          args[0]
        }\`\` Adet Mesaj Silindi.**`
      )
  );
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil", "mesaj-sil", "mesajları-sil"],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'sil',
  category: 'moderasyon',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '.sil <miktar>'
};