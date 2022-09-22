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
const subTime = 60
const pizzaTime = 45
const soupTime = 105
const two = 1.5
const three = 2
let time = 0
let minutes = 0
let seconds = 0

// let userInput = soup, pizza, or sub
const userInput = prompt('Enter your choice, sub, pizza or soup: ')

// this checks if the user inputted a valid item
if (userInput === 'sub' || userInput === 'pizza' || userInput === 'soup') {
  const timeString = prompt('Enter your amount: ')
  const amountNumber = parseFloat(timeString)

  // this checks what the user inputted
  if (userInput === 'sub') {
    time = subTime
  } else if (userInput === 'pizza') {
    time = pizzaTime
  } else if (userInput === 'soup') {
    time = soupTime
  }

  // this checks the amount of what the user inputted
  if (amountNumber === 1 || amountNumber === 2 || amountNumber === 3) {
    if (amountNumber === 2) {
      time = time * two
    } else if (amountNumber === 3) {
      time = time * three
    }

    // this converts the time to minutes and seconds
    seconds = time / 60
    minutes = Math.floor(seconds)
    seconds = (seconds - minutes) * 60
    console.log(
      `The ${userInput} will be done in ${minutes} minutes ${seconds} seconds!`
    )

    // this catches invalid number inputs
  } else {
    console.log('Invalid Number!')
  }

  // this catches invalid food inputs
} else {
  console.log('Invalid Input')
}
console.log('\nDone.')
