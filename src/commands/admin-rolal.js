let rolal = {
  name:"rolal",
  code:`
  $takeRoles[$guildID;$mentioned[1];$mentionedRoles[1]]
  $color[1;$getVar[hex]]
  $addTimestamp[1]
  $author[1;🌟 • Rol Alma İşlemi Başarılı;$authorAvatar]
  $footer[1;$username Tarafından İstendi]
  $description[1;
  💠 • Alınan Rol : <@&$mentionedRoles[1]>
💠 • Rolü Alan Kullanıcı : <@$mentioned[1]>
💠 • Rolü Veren Yetkili : <@$authorID>
  ]
  $onlyIf[$mentionedRoles[1]!=;🌙 • Lütfen Bir Rol Etiketle]
  $onlyIf[$mentioned[1]!=;🌙 • Lütfen Bir Kullanıcı Etiketle]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];🌙 • Rolümden üstte/eşit birinden rol alamam.]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];🌙 • Rolünden üstte/eşit birinden rol alamazsın]
  $onlyIf[$mentioned[1;no]!=$authorID;🌙 • Kendinden Rol Alamazsın]
  $onlyPerms[manageroles;🌟 • Rolleri Yönet Yetkin Yok]
 `
}

module.exports = rolal