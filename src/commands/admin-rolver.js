let rolver = {
  name:"rolver",
  code:`
  $giveRoles[$guildID;$mentioned[1];$mentionedRoles[1]]
  $color[1;$getVar[hex]]
  $addTimestamp[1]
  $author[1;🌟 • Rol Verme İşlemi Başarılı;$authorAvatar]
  $footer[1;$username Tarafından İstendi]
  $description[1;
  💠 • Verilen Rol : <@&$mentionedRoles[1]>
💠 • Rolü Alan Kullanıcı : <@$mentioned[1]>
💠 • Rolü Veren Yetkili : <@$authorID>
  ]
  $onlyIf[$mentionedRoles[1]!=;🌙 • Lütfen Bir Rol Etiketle]
  $onlyIf[$mentioned[1]!=;🌙 • Lütfen Bir Kullanıcı Etiketle]
  $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];🌙 • Rolümden üstte/eşit birine rol veremem.]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];🌙 • Rolünden üstte/eşit birine Rol Veremezsin]
  $onlyIf[$mentioned[1;no]!=$authorID;🌙 • Kendine Rol Veremezsin.]
  $onlyPerms[manageroles;🌟 • Rolleri Yönet Yetkin Yok]
 `
}

module.exports = rolver