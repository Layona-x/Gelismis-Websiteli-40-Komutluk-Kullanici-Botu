let ban = {
  name:"ban",
  code:`
  $ban[$guildID;$mentioned[1;no];$noMentionMessage]
  $color[1;$getVar[hex]]
  $author[1;Bir Kullanıcı Banlandı;$userAvatar[$mentioned[1;no]]]
  $footer[1;$username Tarafından İstendi]
  $description[1;
     • Banlanan Kullanıcı : $userTag[$mentioned[1;no]]-(\`\$mentioned[1;no]\`\) \n
  • Banlanma Sebebi : \`\$noMentionMessage\`\ \n
  • Banlayan Yetkili : <@$authorID> - (\`\$authorID\`\)
  ]
  $onlyPerms[admin;🌙 • \`\Admin\`\ Yetkisine Sahip Olmalısın]
  $onlyIf[$noMentionMessage!=;{newEmbed:{footer:Developed By Layona}{description:🌙 • Lütfen Bir Sebep Giriniz}{color:$getVar[hex]}{author:🌟 • Bir Hata Aldınız}}]
$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{footer:Developed By Layona}{description:🌙 • Lütfen Birini Etiketleyiniz}{timestamp:ms}{color:$getVar[hex]}{author:🌙 • Bir Hata Aldınız:$authorAvatar}}]
  `
}

module.exports = ban