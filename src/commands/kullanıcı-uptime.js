let uptime = {
  name:"uptime",
  code:`
  $author[1;Aktif Kalmam ile Alakalı Bilgiler;$authorAvatar]
  $addTimestamp[1]
  $footer[1;$username[$clientID]]
  $color[1;$getVar[hex]]
  $description[1;
  **Benim Uptime Sürem**: \`\$uptime\`\ \n
  **Nasıl Aktif Kalıyorum?** \n
  - Aktif Kalmam [Uptime Sitem](https://layona-uptime.tk/) Tarafından Sağlanıyor \n
  - Bu Sitenin Altyapısına [Sunucuma](https://discord.gg/Rbgsm2ue3v) Gelip Gerekli Şartları Getirirek Sizde Sahip Olabilirsiniz \n
  - Sizde Siteye Giriş Yapıp Linklerinizi Ekleyebilirsiniz

- $userTag[920315243106795570] Aracılığıyla
  ]
  `
}

module.exports = uptime