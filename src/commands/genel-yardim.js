let help = {
  name:"yardım",
  code:`
  $addTimestamp[1]
  $color[1;$getVar[hex]]
  $author[1;💠 • Yardım Menüsü İstendi;$authorAvatar]
  $addField[1;🙆 Eğlence Komutları;
  \`8ball,aşk-ölçer,dosya-oluştur,nitro,hesapla,meme \`
  ;yes]
  $addField[1;🖍️ Moderasyon Komutları;
 \` ban,isim-değiştir,otorol-ayarla,prefix-ayarla,rolal,rolver,sil,slowmode,tavsiye-kanal \`
 ;yes]
  $addField[1;🙋 Kullanıcı Komutları;
 \` afk,avatar,banlist,banner,korona,davet,döviz,github-finder,kullanıcı-info,kanal-ara,ping,rte,say,tavsiye,todo-ekle,görevlerim,todo-sil,uptime,çevir \`
 ;yes]
  $addField[1;☄️ • Genel Bilgiler;
 • [By $userTag[$botOwnerID]](https://discord.com/users/920315243106795570)
 • [$userTag[$botOwnerID] Personel Site](https://layona.cf)
 • [My Uptime Servis](https://layona-uptime.tk)
 • [My İnvite Link]($getBotInvite[8])
 • [My Support Server](https://discord.gg/HJ4FzAknCR)
 ;yes]
  `
}

module.exports = help