const randomLength = 5
const urlDB = require('../../models/url')


// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// Generate randomNumber function
function randomNumber(randomLength) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  let collection = numbers.concat(lowerCaseLetters).concat(upperCaseLetters)

  // start generating randomNumber
  let randomNumber = ''

  for (let i = 0; i < randomLength; i++) {
    randomNumber += sample(collection)
  }

  return randomNumber

}

// non-repeated-shorten url
function uniqueRandom() {
  const uniqueRandomNumber = randomNumber(randomLength)
  urlDB.findOne({ urlShortner: uniqueRandomNumber })
    .lean()
    .then(urlShortLink => {
      if (urlShortLink) {
        uniqueRandom()
      }
    })
    .catch(error => console.log('uniqueRandom error'))
  return uniqueRandomNumber
}

// export generatePassword function for other files to use
module.exports = uniqueRandom