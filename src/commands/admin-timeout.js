let timeout = {
  name:"timeout",
  code:`
   $color[1;$getVar[hex]]
   $thumbnail[1;$userAvatar[$clientID]]
   $addTimestamp[1]
   $author[1;Bir Kullanıcı Zamanaşımına Girdi;$authorAvatar]
   $description[1;
   <@$mentioned[1;no]>(\`\ $mentioned[1;no]\`\) Başarıyla  \`\$noMentionMessage[1]\`\,Süresiyle Zamanaşımına Girdi \n
 Yetkili : <@$authorID>(\`\$authorID\`\) \n
   Sebep: **$replaceText[$noMentionMessage[2];undefined;Sebep belirtilmedi.]**
  ]
  $timeoutMember[$guildID;$mentioned[1;no];$noMentionMessage[1];no;$replaceText[$noMentionMessage[2];undefined;Sebep belirtilmedi.]]
  $onlyPerms[moderatemembers;🌙 • Bunun İçin Moderate Members Yetkisine Sahip Olmalısın ]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1;no]]];🌙 • Rolümden üstte/eşit birini muteleyemezsin.]
  $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1;no]]];🌙 • Rolünden üstte/eşit birini muteleyemezsin]
  $onlyIf[$mentioned[1;no]!=$authorID;🌙 • Kendini muteleyemezsin.]
  $onlyIf[$djsEval[client.guilds.cache.get('$guildID').members.cache.get('$mentioned[1;no]').isCommunicationDisabled()  ;yes]==false;🌙 • Kullanıcı zaten mutelenmiş.]
  `
}

module.exports = timeout