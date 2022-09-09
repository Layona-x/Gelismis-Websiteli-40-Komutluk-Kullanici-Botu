let dosya = {
  name:"dosya-oluştur",
  "$if":"v4",
  code:`
  $if[$isUserDMEnabled[$authorID]==false]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{timestamp:ms}{footer:$username Hata:$authorAvatar}{author:🌙 • Hata:$authorAvatar}{description:☄️ • Lütfen Dm'nizi Açınız}}]
  $endif
  $if[$isUserDMEnabled[$authorID]==true]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{timestamp:ms}{footer:$username[$clientID] Dosya}{author:Dosyanız Başarıyla Oluşturuldu:$authorAvatar}{description:🌙 • Lütfen Dm'nizi Kontrol Edin}}]
  $dm[$authorID]
  $title[1;Dosyanız Başarıya Olustu]
  $author[1;🔴 • Dosya Başarıyla Oluşturuldu]
  $color[1;$getVar[hex]]
  <@$authorID>
  $description[1;🌙 • Dosya Oluşturma Başarılı]
  $createFile[$noMentionMessage;$username.txt]
  $endif
  `
}

module.exports = dosya