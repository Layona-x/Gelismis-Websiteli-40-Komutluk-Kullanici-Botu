let döviz = {
  name:"döviz",
  code:`
$addTimestamp  [1]
$color[1;$getVar[hex]]
$author[1;Güncel Döviz Kuru Sorgulandı;$authorAvatar]
$description[1;**İsim** \n $jsonRequest[https://zero-two.rodzen.repl.co/doviz/dolar;name]\n**Code**
$jsonRequest[https://zero-two.rodzen.repl.co/doviz/dolar;code]
**Alış**
📥 $jsonRequest[https://zero-two.rodzen.repl.co/doviz/dolar;buying]
**Satış**
📤 $jsonRequest[https://zero-two.rodzen.repl.co/doviz/dolar;selling]]
`
}  

                  
module.exports = döviz                  
                  