let todo_sil = {
  name:"todo-sil",
  "$if":"v4",
  code:`
  $if[$message[1]==1]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Birinci Göreviniz Başarıyla Silindi}}]
  $resetUserVar[todo1]
  $endif
  $if[$message[1]==2]
  $resetUserVar[todo2]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • İkinci Göreviniz Başarıyla Silindi}}]
  $endif
   $if[$message[1]==3]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Üçüncü Göreviniz Başarıyla Silindi}}]
  $resetUserVar[todo3]
  $endif
  $if[$message[1]==4]
  $resetUserVar[todo4]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Dördüncü  Göreviniz Başarıyla Silindi}}]
  $endif
   $if[$message[1]==5]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Beşinci Göreviniz Başarıyla Silindi}}]
  $resetUserVar[todo5]
  $endif
  $if[$message[1]==6]
  $resetUserVar[todo6]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Altıncı Göreviniz Başarıyla Silindi}}]
  $endif
   $if[$message[1]==7]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Yedinci Göreviniz Başarıyla Silindi}}]
  $resetUserVar[todo7]
  $endif
  $if[$message[1]==8]
  $resetUserVar[todo8]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Sekizinci Göreviniz Başarıyla Silindi}}]
  $endif
   $if[$message[1]==9]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Dokuzuncu Göreviniz Başarıyla Silindi}}]
  $resetUserVar[todo9]
  $endif
  $if[$message[1]==10]
  $resetUserVar[todo10]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todo Silindi:$authorAvatar}{author:☄️ • Bir Todo Sildiniz:$authorAvatar}{timestamp:ms}{description:🌙 • Onuncu Göreviniz Başarıyla Silindi}}]
  $endif
  $if[$message[1]==all]
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{footer:$username Todos-Delete}{timestamp:ms}{author:☄️ • Tüm Görevlerin Silindi:$authorAvatar}{description:🌙 • Var Olan Tüm Görevlerine Elvada De Asker}}]
$resetUserVar[todo1]
$resetUserVar[todo2]
$resetUserVar[todo3]
$resetUserVar[todo4]
$resetUserVar[todo5]
$resetUserVar[todo6]
$resetUserVar[todo7]
$resetUserVar[todo8]
$resetUserVar[todo9]
$resetUserVar[todo10]
  $endif
  `
}

module.exports = todo_sil