let banner = {
  name:"banner",
  "$if":"v4",
  code:`
  $color[1;$getVar[hex]]
  $author[1;$username[$mentioned[1;yes]] Banneri Görüntülendi;$userAvatar[$mentioned[1;yes]]]
  $image[1;$getUserBanner[$mentioned[1;yes]]]
  $if[$getUserBanner[$mentioned[1;yes]]==null]
  $channelSendMessage[$channelID;{newEmbed:{author:🌟 • Bir Hata Aldınız:$userAvatar[$mentioned[1;yes]]}{description:Hata: \`\Maalesef Kullanıcıda Banner Bulunmuyor\`\}{color:$getVar[hex]}{timestamp:ms}}]
  $endif
  `
}

module.exports = banner;