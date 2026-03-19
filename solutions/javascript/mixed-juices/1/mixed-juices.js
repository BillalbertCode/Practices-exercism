// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5
      break;
    case 'Energizer':
    case'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3
      break;
    case 'All or Nothing':
      return 5
      break;
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  //wedges * limes
  const SMALL_LIMES = 6
  const MEDIUM_LIMES = 8
  const LARGE_LIMES = 10

  let countWedges = 0 // count of wedges
  let limesCut = 0 // Index of iteration - Lemons cut
  console.log('Limes cut')
  while (countWedges < wedgesNeeded && limesCut < limes.length) {
    switch(limes[limesCut]){
      case 'small':
        countWedges += SMALL_LIMES
        break;
      case 'medium':
        countWedges += MEDIUM_LIMES
        break;
      case 'large':
        countWedges += LARGE_LIMES
        break;
      default:
        break;
      
    }
    limesCut++
  }
  return limesCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  console.log(orders)
  let timeNow = 0
  let orderIndex = 0
  let newOrders = [...orders]

  do {
    timeNow += timeToMixJuice(orders[orderIndex])
    newOrders.shift()
    orderIndex++
  } while (timeLeft > timeNow )
  console.log("timeNow:" + timeNow)
  console.log("timeLeft:" + timeLeft )
  console.log(newOrders)
  
  return newOrders
}
