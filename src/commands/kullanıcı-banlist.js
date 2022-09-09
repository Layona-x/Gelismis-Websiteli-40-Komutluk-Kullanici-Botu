let banlist = {
  name:"banlist",
  code:`
  $color[1;RANDOM]
  $thumbnail[1;$userAvatar[$clientID]]
  $addTimestamp[1]
  $footer[1;$username[$clientID]]
  $description[1;
  Sunucuda Banlanan Kişi Sayısı : $banCount
  
  ==========Banlanan Kişiler========
  
  $joinSplitText[
  
  $textSplit[$usersbanned
  ]]
  =============================
  
  ]
  
  `
}

module.exports = banlist