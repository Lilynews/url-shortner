// 載入 express 並建構應用程式伺服器
const express = require('express')
const app = express()
const port = 3000
const host = `http://localhost:${port}`
// Mongoose 連線「被執行」
require('./config/mongoose')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const routes = require('./routes')


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true }))
app.use(routes)

// 路由




// 設定 port 3000
app.listen(port, () => {
  console.log(`App is running on ${host}`)
})