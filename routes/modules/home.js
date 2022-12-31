const express = require('express')
const router = express.Router()
const urlDB = require('../../models/url')
const generateRandom = require('../../public/javascripts/generator')
const port = 3000
const host = `http://localhost:${port}`


router.get('/', (req, res) => {
  res.render('index', { title: 'URL-Shortener' })
})

router.post('/', (req, res) => {
  let randomNumber = generateRandom()
  urlDB.create({ url: req.body.inputUrl, urlShortner: randomNumber })
    .then(() => { res.render('urlShortner', { title: 'Shorten Succeed!', randomNumber, host }) })
    .catch(error => console.log('post router error'))
})

module.exports = router

