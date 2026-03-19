// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  function createNumber(array){
    const arrayToString = String(array).replaceAll(',','')
    const stringToNumber = Number(arrayToString)
    return stringToNumber
  }
  const number1 = createNumber(array1)
  const number2 = createNumber(array2)

  return number1 + number2
  
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const valueToString = String(value)
  let palindrome = ''
  for (let index = valueToString.length - 1; index >= 0; index--) {
    palindrome = palindrome + valueToString[index]
  }
  if (palindrome === valueToString) return true
  return false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  const textAnyInput = 'Required field'
  const textNumberBeside = 'Must be a number besides 0'

  const num = Number(input)
  if(!Boolean(input)) return textAnyInput
  if(isNaN(num) || num === 0){
    return textNumberBeside
  }
  return ''
  
}
