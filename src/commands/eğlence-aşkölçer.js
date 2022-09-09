
let ask_olcer = {
name: "aşk-ölçer", 
code: `$title[1;Aşk Kontrolü 💕]
$description[1;$username ile <@$mentioned[1]>'in aşk yüzdesi $random[0;100]%]
$image[1;https://api.cool-img-api.ml/ship?user=$replaceText[$replaceText[$replaceText[$userAvatar[$authorID]&user2=$userAvatar[$mentioned[1;yes]];webp;png;-1];jpg;png;-1];gif;png;-1]]
$color[1;$getVar[hex]]
  $onlyIf[$isBot[$mentioned[1]]!=true;😟 Bot İle Mi]
  $onlyIf[$message!=;🌙 • Lütfen Birini Etiketle]
` 
}

module.exports = ask_olcer
