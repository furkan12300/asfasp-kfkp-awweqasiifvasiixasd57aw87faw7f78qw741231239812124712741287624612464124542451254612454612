const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.cache.get("861360242532810794")//bug repot kanal id'i
let embed = new Discord.MessageEmbed()
.setTitle("Yeni bie öneri var!")
.setThumbnail("https://cdn.discordapp.com/attachments/717123467086135317/861360441966854144/reserd.png")
.addField("Öneri", bug)
.addField("Bildiren", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#ffffff")

message.channel.send("**\<:vasifsizonay:861358694213353502> | Önerin geliştiriciye başarılı bir şekilde iletildi.**")
channel.send(embed).then(i => i.react("✔️"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'öner',
  description: 'öneri komutu',
  usage: 'öner'
}