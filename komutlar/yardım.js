const Discord = require('discord.js');
exports.run = (client, message, args) => {
    message.delete();
  const emoji = client.emojis.get('699165094898040893');
  
  const yardım = new Discord.RichEmbed()
.setDescription(`
:scroll:**ANA KOMUTLAR**:scroll:
[+] +çal (şarkı İsmi) <- ŞArkıyı Çalmaya Başlar
[+] +beklet <- Şarkıyı Bekletir.
[+] +dur  <- Şarkıyı Bitirir.

:scroll: **ARA KOMUTLAR** :scroll:
[+] +devam       <- Durudrulan Şarkıyı Devam Ettirir.
[+] +ses    <- Botun Ses Düzeiyini Ayarlar.
[+] +loop    <- Şarkıyı Döngüye Sokar.
[+] +çek    <- Botu Bulunduğunuz Odaya Çeker.
[+] +radyo   <- Radyo Menusunu Açar.
[+] +destek   <- Yetkililere Özel Komut.

:pencil:**Her Gece 02:00 ve 03:00 Bakıma Alıyoruz**:pencil:

`,true);
  
  message.channel.send(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 4
};

exports.help = {
  name: 'yardım',
  description: 'Yardım.',
  usage: 'yardım'
};