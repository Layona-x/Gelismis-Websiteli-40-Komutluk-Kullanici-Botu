let isim_degistir = {
  name:"isim-değiştir",
  code:`
  $changeNickname[$mentioned[1;no];$noMentionMessage;]
  $color[1;$getVar[hex]]
  $addTimestamp[1]
  $author[1;🌟 • İsim Değiştirme Başarılı;$authorAvatar]
  $footer[1;$username Tarafından İstendi;$authorAvatar]
  $description[1;
  ☄️ • Kullanıcının İsmi Başarıyla $noMentionMessage Olarak Değiştirildi
  ]
  $onlyIf[$noMentionMessage!=;🌙 • Lütfen Yeni İsmi Giriniz]
  $onlyIf[$mentioned[1]!=;🌙 • Lütfen Bir Kullanıcı Giriniz]
  $onlyPerms[managenicknames;🌙 • Üzgünüm \`\İsimleri_Yönet\`\ Yetkin Bulunmuyor]
  `
}

module.exports = isim_degistir