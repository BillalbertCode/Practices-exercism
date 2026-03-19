// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  if(kind === 'car' || kind === 'truck') {
    return true
  }else{
    return false
  }
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let choose
  const txt = ' is clearly the better choice.'
  if(option1 < option2 ){
    choose = option1
  }else{
    choose = option2
  }
  return (choose + txt)
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  const yearsOld3 = 0.8 // 80%
  const yearsOld10 = 0.5 // 50%
  const yearsOld3_10= 0.7 // 70% Price between least trirth years and tenth years

  if(age < 3){
    return (yearsOld3 * originalPrice)
  }else if(age > 10){
    return (yearsOld10 * originalPrice)
  }else {
    return (yearsOld3_10 * originalPrice)
  }
}
