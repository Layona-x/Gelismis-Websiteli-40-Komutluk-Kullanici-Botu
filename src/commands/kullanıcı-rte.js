let rte = {
  name:"rte-tweet",
  code:`
   $onlyIf[$message!=;Lütfen birşeyler yaz.]
  $attachment[https://cherrabl.sirv.com/twit.png?text.0.text=$replaceText[$message; ;%20;-1]&text.0.position.gravity=west&text.0.position.x=13%25&text.0.size=60&text.0.color=000000;rte.png]
  $deletecommand
  `
}

module.exports = rte