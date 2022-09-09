let otorol = {
  name:"otorol-ayarla",
  "$if":"v4",
  code:`
  $if[$message[1]==aç]
  $setServerVar[otorolsistemi;açık]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:🌟 • Otorol Sistemi Açıldı:$authorAvatar}{description:☄️ • Otorol-Sistemi Başarıyla Açıldı Lütfen otorol-ayarla log-rol Komutlarını Kullanarak Sistemi Kurun}}]
  $endif
  $if[$message[1]==kapat]
  $resetServerVar[otorolsistemi]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:🌟 • Otorol Sistemi Kapatıldı:$authorAvatar}{description:☄️ • Otorol-Sistemi Başarıyla Kapatıldı}]
  $endif
  $if[$message[1]==log]
  $setServerVar[otorollog;$mentionedChannels[1]]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:🌟 • Otorol Sistemi Log-Kanalı:$authorAvatar}{description:☄️ • Otorol-Log Kanalı Başarıyla <#$mentionedChannels[1]> Olarak Ayarlandı }}]
  $onlyIf[$mentionedChannels[1]!=;🌙 • Lütfen Bir Kanal Etiketleyin]
  $endif
  $if[$message[1]==rol]
  $setServerVar[otorol;$mentionedRoles[1]]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:🌟 • Otorol Başarıyla Ayarlandı :$authorAvatar}{description:☄️ • Otorol Başarıyla <@&$mentionedRoles[1]> Olarak Ayarlandı}}]
  $onlyIf[$mentionedRoles[1]!=;🌙 • Lütfen Bir Rol Etiketleyin]
  $endif
  $onlyPerms[admin;☄️ • Üzgünüm Admin Yetkiniz Yok]
  `
}

module.exports = otorol