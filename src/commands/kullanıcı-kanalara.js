let kremlin = {
  name:"kanal-ara",
  code:`
  $channelSendMessage[$channelID;Mobil kullanıcılar için:
$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).join(", ");yes];no]
$author[1;$serverName[$guildID] Sunucusunda Kanallar Aranıyor.;$serverIcon[$guildID]
$thumbnail[1;$authorAvatar]]
$description[1;🌟 • Kanal Aranan Kelime: \`$message\`
💫 **Sonuçlar**
Bulunan Kanallar: $djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).join(", ");yes]
Bulunan Kanal Sayısı : **$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).length;yes]**
Arayan Kişi: $userTag[$authorid]
Aranan Sunucu: $serverName[$guildID]]
$color[1;$getVar[hex]]
$onlyIf[$djsEval[message.guild.channels.cache.filter(x => x.name.includes("$message")).map(x => x).length;yes]!=0;:x: Herhangi bir kanal bulunamadı.]
$onlyIf[$checkContains[$message;A;B;C;Ç;D;E;F;G;Ğ:H:I:İ:J;K;L;M;N;O;Ö;P;R;S;Ş;T;U;Ü;V;Y;Z;X;Q;W]!=true;:x: Kanal adlarında büyük harf bulunamaz]
$onlyIf[$charCount[$message]=<48;:x: Kanal adları 47 karekterden fazla olamaz]
$onlyIf[$checkContains[$message; ]!=true;:x: Kanal adlarında boşluk bulunamaz]
$onlyIf[$message!=;:x: Lütfen bir arama sözcüğü yazın]
  `
}

module.exports = kremlin