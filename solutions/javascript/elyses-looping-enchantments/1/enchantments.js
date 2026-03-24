// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach

    let counter = 0
    
    stack.forEach((cardStack) => {
      if(cardStack === card) counter += 1
    } )
  
    return counter
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop

  let contador = 0
  for (const card of stack){
    card % 2 == !type ? contador+= 1 : console.log("ola soy omelo chino")
  }
  
  return contador
}
