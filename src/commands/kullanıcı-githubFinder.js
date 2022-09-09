let github = {
  name:"github-finder",
  "$if":"v4",
  code:`
  $let[e;error]
  $color[1;$getVar[hex]]
  $author[1;Github Finder;$authorAvatar]
  $footer[1;Github Kullanıcı Arandı;$authorAvatar]
  $addTimestamp[1]
  $description[1;
  **__Kullanıcının İsmi__** \n
  [$jsonRequest[https://api.popcat.xyz/github/$noMentionMessage;name]]($jsonRequest[https://api.popcat.xyz/github/$noMentionMessage;url]) \n
  **__Kullanıcının Biosu__** \n
  $jsonRequest[https://api.popcat.xyz/github/$noMentionMessage;bio] \n
  **__Public Repo Sayısı__** \n
  $jsonRequest[https://api.popcat.xyz/github/$noMentionMessage;public_repos] \n
  **__Takip Edilen Kişi Sayısı__** \n
  $jsonRequest[https://api.popcat.xyz/github/$noMentionMessage;following] \n
  **__Takip Eden Kişi Sayısı__** \n
  $jsonRequest[https://api.popcat.xyz/github/$noMentionMessage;followers] \n
]
  $onlyIf[$noMentionMessage!=;🌙 • Lütfen Bir Kullanıcı İsmi Giriniz]
  `
}

module.exports = github