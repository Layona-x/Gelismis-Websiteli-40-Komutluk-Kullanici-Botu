let todos = {
 name:"görevlerim",
 code:`
 $addTimestamp[1]
 $footer[1;$username Görevlerin;$authorAvatar]
 $author[1;🌟 İşte Görevlerin;$authorAvatar]
 $color[1;$getVar[hex]]
 $description[1;
 1- $getUserVar[todo1;$authorID]
2- $getUserVar[todo2;$authorID]
3- $getUserVar[todo3;$authorID]
4- $getUserVar[todo4;$authorID]
5- $getUserVar[todo5;$authorID]
6- $getUserVar[todo6;$authorID]
7- $getUserVar[todo7;$authorID]
8- $getUserVar[todo8;$authorID]
9- $getUserVar[todo9;$authorID]
10- $getUserVar[todo10;$authorID]
 ]
 `
}

module.exports = todos

