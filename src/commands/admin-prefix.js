let prefix = {
  name:"prefix-ayarla",
  code:`
  $setServerVar[prefix;$noMentionMessage]
  $color[1;$getVar[hex]]
  $addTimestamp[1]
  $author[1;🌟 • Prefix Başarıyla Ayarlandı;$authorAvatar]
  $footer[1;$username Tarafından İstendi;$authorAvatar]
  $description[1;
  🌙 • Prefix $noMentionMessage Olarak Ayarlandı
  ]
  $onlyIf[$noMentionMessage!=;🌙 Lütfen Bir Prefix Giriniz]
  $onlyPerms[admin;🌟 • Admin Yetkiniz Bulunmuyor]
  `
}

module.exports = prefix