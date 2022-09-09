let davet = {
  name:"davet",
  code:`
  $color[1;$getVar[hex]]
  $author[1;Davet Linki;$userAvatar[$clientID]]
  $description[1;
  ☄️ • $username[$clientID] Davet Etmek İçin Butona Tıkla]
  $addButton[1;🌟 • Beni Davet Et;link;https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot%20applications.commands]
  `
}

module.exports = davet