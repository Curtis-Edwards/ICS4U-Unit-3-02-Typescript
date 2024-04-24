/*
* This program calculates the factorial of a number.
*
* @author  Curtis Edwards
* @version 1.0
* @since   2024-04-24
*/

function factorial(someInt: number): number {
  /*
  * This funtion calculates the fartorial using recursion.
  */
  if (someInt < 0) {
    return -1
  } else {
    if (someInt === 1) {
      return 1
    } else {
      return (someInt * factorial(someInt - 1))
    }
  }
}

const userInput = createPrompt(`Entered = `)
const someInt = userInput.value
let factorialOfInt = reverseString(someInt)
console.log(`Returned = ${factorialOfInt}`)

console.log(`\nDone.`)
