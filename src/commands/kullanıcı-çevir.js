let translate = {
  name:"çevir",
  code:`
  $channelSendMessage[$channelID;{newEmbed:{color:$getVar[hex]}{thumbnail:$userAvatar[$authorID]}{timestamp:ms}{title:Translate İşlemi Başarılı}{description:$message[1] Adlı Mesajı $message[2] Kodlu Dile Çevirdiniz İşte Kelime/Cümle **-->** $jsonRequest[https://api.popcat.xyz/translate?to=$message[2]&text=$message[1];translated;Bilinmeyen Bir Hata Oluştu]}}]
` 
}

module.exports = translate;