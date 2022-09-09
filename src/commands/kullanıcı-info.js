let kullanıcı_bilgi = {
  name:"kullanıcı-info",
  code:`
  $author[1;$username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
  $thumbnail[1;$userAvatar[$mentioned[1;yes]]]
  $color[1;$getVar[hex]]
  $addTimestamp[1]
  $footer[1;$username İnfos;$userAvatar[$mentioned[1;yes]]]
  $description[1;
**Rollerin** \n
$userRoles[$mentioned[1;yes];$guildID;mention;-] \n
**Discorda Katılma Tarihi** \n
\`\$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];and;ve];seconds;Saniye];minutes;Dakika];hours;Saat];days;Gün];months;Ay];weeks;Hafta];years;Yıl];second;Saniye];minute;Dakika];hour;Saat];month;Ay];year;Yıl];week;Hafta]\`\ \n
**Sunucuya Katılama Tarihi**\n
\`\$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$mentioned[1;yes];$guildID;time];and;ve];seconds;Saniye];minutes;Dakika];hours;Saat];days;Gün];months;Ay];weeks;Hafta];years;Yıl];second;Saniye];minute;Dakika];hour;Saat];month;Ay];year;Yıl];week;Hafta]\`\ \n
 **Bot mu?** \n
 \`\$replaceText[$replaceText[$isBot[$mentioned[1;yes]];true;Evet];false;Hayır]\`\ \n
 **Kullanıcı** \n
 $username[$mentioned[1;yes]]-<@$mentioned[1;yes]>-(\`\$mentioned[1;yes]\`\)
 ]
  `
}

module.exports = kullanıcı_bilgi