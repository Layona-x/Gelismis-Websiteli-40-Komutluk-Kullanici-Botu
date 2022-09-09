let nitro = {
  name:"nitro",
  code:`
  $color[1;$getVar[hex]]
  $footer[1;Unutmayalim Ki Hediyeler Random Atılıyor]
  $addTimestamp[1]
  $description[1;
  https://discord.gift/$randomString[16]
  ]
  
  
  `
}

module.exports = nitro