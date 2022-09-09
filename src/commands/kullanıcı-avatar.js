let avatar = {
  name:"avatar",
  "$if":"v4",
  code:`
  $author[1;$userTag[$mentioned[1;yes]] Kullanıcısının Avatarı Görüntülendi;$userAvatar[$mentioned[1;yes]]
  $color[1;$getVar[hex]]
  $image[1;$userAvatar[$mentioned[1;yes]]
  `
}

module.exports = avatar;