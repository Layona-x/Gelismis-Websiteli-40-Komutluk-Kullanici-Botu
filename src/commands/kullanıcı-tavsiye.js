let tavsiye = {
  name:"tavsiye",
  code:`
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Başarıyla Tavsiye Verdin:$authorAvatar}{timestamp:ms}{description:🌟 •  Başarıyla Tavsiye Verildi}}]
  $addReactions[🌙]
  $useChannel[$getServerVar[tavsiyek]]
  $color[1;$getVar[hex]]
  $author[1;$username[$authorID] Tarafından Bir Tavsiye Verildi;$authorAvatar]
  $description[1;
  \n 
  **Verilen Tavsiye** : \`\$noMentionMessage[1]\`\ \n
  **Tavsiye Veren Kullanıcı**: <@$authorID> - (\`\$authorID\`\) \n
  **Tavsiye Verilen Saat** : \`\ $sum[$hour;3]:$minute \`\
  ]
  $onlyIf[$noMentionMessage!=;☄️ • Lütfen Bir Mesaj Giriniz]
  $onlyIf[$getServerVar[tavsiyek]!=;☄️ Tavsiye-Kanalı Maalesef Ayarlanmamış]
  `
}

module.exports = tavsiye