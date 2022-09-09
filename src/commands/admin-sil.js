let sil = {
  name:"sil",
  code:`
  $clear[$noMentionMessage]
  $author[1;🌙 • Belirtilen Sayıda Mesaj Silindi;$authorAvatar]
  $color[1;$getVar[hex]]
  <@$authorID>
  $footer[1;$username Tarafından İstendi;$authorAvatar]
  $description[1;
  ☄️ • $message Miktarda Mesaj Silindi
  ]
  $deleteIn[8s]
  $onlyIf[$isNumber[$message]==true;🌙 • Lütfen Bir Sayı Giriniz]
  $onlyIf[$message!=;🌙 • Lütfen Silinecek Miktarı Giriniz]
  $onlyPerms[managemessages;🌙 • Üzgünüm \`\Mesajları_Yönet\`\ Yetkin Yok]
  `
}

module.exports = sil