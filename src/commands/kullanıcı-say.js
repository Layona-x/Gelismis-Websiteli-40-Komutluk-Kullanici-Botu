let say = {
  name:"say",
  code:`
$addTimestamp[1]
$color[1;$getVar[hex]]
$author[1;Sunucu Anlık Durumu;$authorAvatar]
$description[1;
  • Sunucuda \`\$membersCount\`\ Üye Var \n
  • Sunucuda \`\$serverBoostCount\`\ Boost Var \n
  • Sunucuda \`\$math[$membersCount-$membersCount[$guildID;offline]]\`\ aktif üye bulunmakta \n

  `
}

module.exports = say