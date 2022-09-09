let tavsiye_kanal = {
  name:"tavsiye-kanal",
  "$if":"v4",
  code:`
  $if[$message[1]==ayarla]
  $addTimestamp[1]
  $setServerVar[tavsiyek;$mentionedChannels[1]]
  $color[1;$getVar[hex]]
  $author[1;Tavsiye Kanal Başarıyla Ayarlandı]
  $description[1;
  🌟 • Başarıyla Tavsiye-Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı
  ]
  $onlyIf[$mentionedChannels[1]!=;🌙 • Lütfen Bir Kanal Etiketleyin]
  $endif
  $if[$message[1]==sıfırla]
  $resetServerVar[tavsiyek]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{timestamp:ms}{author:Başarıyla Tavsiye-Kanalı Sıfırlandı:$authorAvatar}{description:Tavsiye-Kanalı Sıfırlandı Ayarlamak İçin: \`\$getServerVar[prefix]tavsiye-kanal ayarla\`\}}]
  $onlyIf[$getServerVar[tavsiyek]!=;☄️ • Tavsiye Kanalı Zaten Ayarlanmamış]
  $endif
  $onlyPerms[admin;$getVar[admin]]
  `
}

module.exports = tavsiye_kanal