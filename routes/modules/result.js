const express = require('express')
const router = express.Router()
const urlDB = require('../../models/url')

router.get('/:randomNumber', (req, res) => {
  const randomNumber = req.params.randomNumber
  urlDB.findOne({ urlShortner: randomNumber })
    .then(urlLink => {
      res.redirect(urlLink.url)
      // if(urlLink) {
      //    res.redirect(urlLink.url)
      // }
    })
    .catch(error => console.log('get/: router error'))
})

module.exports = router
