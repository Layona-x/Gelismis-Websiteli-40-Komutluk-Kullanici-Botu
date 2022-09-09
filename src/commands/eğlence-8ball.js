let eight_ball = {
  name:'8ball',
  code:`$color[1;$getVar[hex]]
   $description[1;$jsonRequest[https://api.popcat.xyz/translate?text=$jsonRequest[https://api.popcat.xyz/8ball;answer;]&to=turkish;translated;]]
`
}

module.exports = eight_ball