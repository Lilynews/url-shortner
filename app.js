// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const port = 3000
// Mongoose 連線「被執行」
require('./config/mongoose')
const exphbs = require('express-handlebars');
const generateRandom = require('./public/javascripts/generator')


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(express.static('public'))

// 路由
app.get('/', (req, res) => {
  res.render('index', { title: 'URL-Shortener'})
})
app.post('/shorten', (req, res) => {
  res.render('urlShortner', { title: 'Shorten Succeed!', generateRandom, port })
})




// 設定 port 3000
app.listen(port, () => {
  console.log('App is running on http://localhost:3000')
})