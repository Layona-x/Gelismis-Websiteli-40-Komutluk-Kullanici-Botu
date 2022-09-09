let todo_ekle = {
  name:"todo-ekle",
  "$if":"v4",
  code:`
  $if[$message[1]==1]
  $setUserVar[todo1;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • İlk Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo1;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 1'e Git Onu Bitir Hadi]
  $endif
  $if[$message[1]==2]
  $setUserVar[todo2;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • İkinci Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo2;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 2'ye Git Onu Bitir Hadi]
  $endif 
  $if[$message[1]==3]
  $setUserVar[todo3;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • Üçüncü  Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo3;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 3'e Git Onu Bitir Hadi]
  $endif
$if[$message[1]==4]
  $setUserVar[todo4;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • Dördüncü Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo4;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 4'e Git Onu Bitir Hadi]
  $endif
 $if[$message[1]==5]
  $setUserVar[todo5;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • Beşinci Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo5;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 1'e Git Onu Bitir Hadi]
  $endif
  $if[$message[1]==6]
  $setUserVar[todo6;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • Altıncı Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo6;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 6'ya Git Onu Bitir Hadi]
  $endif
  $if[$message[1]==7]
  $setUserVar[todo7;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • Yedinci Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo7;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 7'ye Git Onu Bitir Hadi]
  $endif 
  $if[$message[1]==8]
  $setUserVar[todo8;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • Sekizinci Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo8;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 8'e Git Onu Bitir Hadi]
  $endif
$if[$message[1]==9]
  $setUserVar[todo9;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • Dokuzuncu Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo9;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 9'a Git Onu Bitir Hadi]
  $endif
 $if[$message[1]==10]
  $setUserVar[todo10;$messageSlice[1;$math[$charCount[$noMentionMessage]-1]];$authorID]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{author:Todo Ekleme Başarılı:$authorAvatar}{timestamp:ms}{footer:$username Todos:$authorAvatar}{description:☄️ • Onuncu Görevin Başarıyla Eklendi}}]
  $onlyIf[$getUserVar[todo10;$authorID]==Bulunmuyor;☄️ • Zaten Bir Görevin Var Daha Neyini Ekliyon 10'a Git Onu Bitir Hadi]
  $endif
 $onlyIf[$noMentionMessage[1]<10;🌟 • 10'dan Küçük Bir Görev Numarası Girin]
 $onlyIf[$noMentionMessage[2]!=;🌟 • Lütfen Bir Görev Girin]
 $onlyIf[$noMentionMessage[1]!=;🌟 • Lütfen Bir Görev Numarası Giriniz]
`}

module.exports = todo_ekle