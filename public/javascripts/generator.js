// define sample function to randomly return an item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generator function
function generator(options) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  let collection = numbers.concat(lowerCaseLetters).concat(upperCaseLetters)
  const randomLength = 5

  // start generating randomNumber
  let randomNumber = ''
  for (let i = 0; i < randomLength; i++) {
    randomNumber += sample(collection)
  }

  return randomNumber
}

// export generatePassword function for other files to use
module.exports = generator