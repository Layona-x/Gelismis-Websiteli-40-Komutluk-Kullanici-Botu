/* For Bot */
    /* Required */
const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
})
bot.readyCommand({
    channel: "",
    code: `$log[💗 $userTag[$clientID] 💠]`
})
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./src/commands/")


require('./config/callback.js')(bot)
require('./config/status.js')(bot)
require('./config/variables.js')(bot)
require('./config/todos.js')(bot)



/* For Website */
  /* Required */
const axios = require("axios");
const discord = require('discord.js')
const client = new discord.Client()
client.on("ready",()=>{
  console.log("Djs Hazır")
})
client.login(process.env.token)
const express = require("express")
const mongoose = require('mongoose')
const https = require('https')
const app = express()
const ejs = require('ejs')
const bodyParser = require("body-parser");
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
dotenv.config()
let port = 3000;
app.use(bodyParser.json()).use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const dbURL = process.env.db;
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log("mongoDB Bağlantı kuruldu");
    });
  })
  .catch((err) => console.log(err));
app.use(express.static("public"))
app.use(cookieParser())
app.use(morgan('dev'))
app.use("/uploads", express.static("public/data"));
app.set('view engine','ejs')
/* Gerekiyor Abi */
  let ping = client.ws.ping
  let config = require('./config/ayarlar.json')
/* --End-- */
const passport = require("passport");
const session = require("express-session");
const { Strategy } = require("passport-discord");

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

const strategy = new Strategy(
	{
		clientID: "",
		clientSecret: "",
		callbackURL: ``,
		scope: ["identify"],
	},
	(_access_token, _refresh_token, user, done) =>
		process.nextTick(() => done(null, user)),
);

passport.use(strategy);

app.use(
	session({
		secret: "secret",
		resave: false,
		saveUninitialized: false,
	}),
);
app.use(passport.session());
app.use(passport.initialize());

app.get(
	"/giris",
	passport.authenticate("discord", {
		scope: ["identify"],
	}),
);

app.get(
	"/callback",
	passport.authenticate("discord", {
		failureRedirect: "/hata",
	}),
	(req, res) =>  res.redirect("/"),
);

app.get('/',(req,res)=>{
  let bot = client.users.cache.get(config.botid)
  let botAvatar = bot.avatarURL({dynamic:true})
  let botStatus = bot.presence.status
  let owner = client.users.cache.get(config.ownerid)
  let ownerName = owner.username
  if (!req.user || !client.guilds.cache.get(config.sunucuid).members.cache.has(req.user.id)
  ){
    return res.send(`
          Siteyi Görebilmek İçin <a target="_blank" href="${config.sunucudavet}">Discord Sunucumuza</a> Katılmanız | Siteye <a href="${config.domain}/callback">Giriş Yapmanız</a> Gerekmektedir.
        `)
  }else{
    let data = req.user
    let dataName = req.user.username
    res.render(`${__dirname}/src/pages/anasayfa.ejs`,
    {
      bot:bot,
      user:req.user,
      ownerName:ownerName,
      botAvatar:botAvatar,
      botStatus:botStatus,
      dataName:dataName,
      sunucu:client.guilds.cache.size,
      uye:"Nan",
      kanal:client.channels.cache.size,
    })
  }
})

app.get('/hakkinda',(req,res)=>{
  let bot = client.users.cache.get(config.botid)
  let owner = client.users.cache.get(config.ownerid)
  res.render(`${__dirname}/src/pages/hakkında.ejs`,{
    botAvatar: bot.avatarURL({dynamic:true}),
    ownerStatus: owner.status,
    ownerTag:owner.username,
    sunucu:client.guilds.cache.size,
    kanal:client.channels.cache.size,
    uye:"Nan"
  })
})

app.get('/davet',function(req,res){
res.render(`${__dirname}/src/pages/davet.ejs`)
})
app.get('/destek',function(req,res){
res.render(`${__dirname}/src/pages/destek.ejs`)
})
