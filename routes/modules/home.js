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
  let url = req.body.inputUrl

  urlDB.findOne({ url })
    .lean()
    .then((result) => {
      if (!result) {
        urlDB.create({ url, urlShortner: randomNumber })
          .then(() => {
            res.render('urlShortner', { title: 'Shorten Succeed!', randomNumber, host })
          })
      } else {
        res.render('urlShortner', { title: 'you had this link before!', randomNumber: result.urlShortner, host })
      }
    })
    .catch(error => console.log('post router error'))
})


module.exports = router