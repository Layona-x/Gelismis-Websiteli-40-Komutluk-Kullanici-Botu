let slowmode = {
  name:"slowmode",
  code:`
  $slowmode[$noMentionMessages;$mentionedChannels[1]]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$clientID]}{timestamp:ms}{author:Kanala Yavaş Mod Ayarlandı:$authorAvatar}
{description:
   Slowmode Kanalı : <#$mentionedChannels[1]> \n
  Slowmode Süresi : \`\$noMentionMessage\`\ \n
}}]
 $onlyIf[$mentionedChannels[1]!=;🌙 • Lütfen Bir Kanal Etiketle>]
 $onlyIf[$noMentionMessage!=;🌙 • Lütfen Bir Süre Belirt]
 $onlyPerms[admin;🌙 • Bu Komutu Kullanabilmek İçin Kanalları Yönet Yetkisine Sahip Olmalısın.]
 `
}


module.exports = slowmode