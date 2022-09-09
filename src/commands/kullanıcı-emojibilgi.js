let emoji = {
    name:"emoji",
  code:`
$addTimestamp[1]
$author[1;Bir Emoji Sorgulandı;$authorAvatar]
$color[1;$getServerVar[hex]]
$description[1;
**İsmi:** \`$emoji[$message[1];name]\`
**ID:** _\`$message[1]\`_
]
  $image[$emoji[$message[1];url]]
$let[id;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];<;];:;];>;];_;];a;];b;];c;];d;];e;];f;];g;];h;];i;];j;];k;];l;];m;];n;];o;];p;];r;];s;];q;];x;];w;];t;];u;];v;];y;];z;];A;];B;];C;];D;];E;];F;];G;];H;];I;];J;];K;];L;];M;];N;];O;];P;];R;];S;];Q;];X;];W;];T;];U;];V;];Y;];Z;]]
  $onlyIf[$message[1]!=;Lütfen bir emoji yazın.]
  `
}

module.exports = emoji