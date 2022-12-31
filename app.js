// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const port = 3000
const host = `http://localhost:${port}`
// Mongoose 連線「被執行」
require('./config/mongoose')
const exphbs = require('express-handlebars');
const generateRandom = require('./public/javascripts/generator')
const urlDB = require('./models/url')
const bodyParser = require('body-parser')



app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true }))

// 路由
app.get('/', (req, res) => {
  res.render('index', { title: 'URL-Shortener'})
})

app.post('/', (req, res) => {
  let randomNumber = generateRandom()
  urlDB.create({ url: req.body.inputUrl, urlShortner: randomNumber })
  .then(() => { res.render('urlShortner', { title: 'Shorten Succeed!', randomNumber, host }) })
  .catch(error => console.log('post router error'))

  
})

app.get('/:randomNumber', (req, res) => {
  const randomNumber = req.params.randomNumber
  urlDB.findOne({ urlShortner: randomNumber })
  .then(urlLink => res.redirect(urlLink.url))
  .catch(error => console.log('get/: router error'))
})


// 設定 port 3000
app.listen(port, () => {
  console.log(`App is running on ${host}`)
})