let hesap_makinesi = {
  name: "hesapla",
  code: `
$color[1;$getVar[hex]]
$thumbnail[1;$userAvatar[$authorID]]
$footer[1;$userTag[$authorID] Tarafından İstendi]
$addTimestamp[1]
$description[1;
$addField[1;🖋Toplama Durumunda;
\`\
$math[$message[1]+$message[2]]
\`\
;yes]
$addField[1;🖋Çıkarma Durumunda;
\`\
$math[$message[1]-$message[2]]
\`\
;yes]
$addField[1;🖋Bölme Durumunda;
\`\
$math[$message[1]/$message[2]]
\`\
;yes]
$addField[1;🖋Çarpma Durumundayken;
\`\
$math[$message[1]*$message[2]]
\`\
;yes]
]
$onlyIf[$message[2]!=;{color:RED}{description:Lütfen 2 Sayı Giriniz!}]
`
}

module.exports = hesap_makinesi