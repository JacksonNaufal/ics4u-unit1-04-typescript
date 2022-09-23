/**
 * The program is the classic
 * microwave.
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-09-20
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

// These are my constants for my program
let counter = 1
const max = 6
const min = 1
const randomNumber = Math.floor(Math.random() * max) + min

while (true) {
  // let userInput = soup, pizza, or sub
  const userInput = prompt('Enter your number (max: 6) (min: 1): ')
  const userGuess = parseFloat(userInput)
  // this checks if the user inputted a valid item
  if (userGuess < max || userGuess > min) {
    if (userGuess === randomNumber) {
      console.log('You Guessed Right!')
      console.log(`It took you ${counter} attemps!`)
      break
    } else if (userGuess > randomNumber) {
      console.log('You Guessed To Low!')
      console.log(`This is your ${counter} attempt!`)
    } else if (userGuess < randomNumber) {
      console.log(`This is your ${counter} attempt!`)
      console.log('You Guessed To High!')
    }
    counter = counter + 1
  } else {
    console.log('Invalid Number')
    break
  }
}
console.log('\nDone.')
