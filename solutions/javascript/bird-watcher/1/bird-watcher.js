// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0
  for (let day = 0; day < birdsPerDay.length; day++) {
    totalBirds += birdsPerDay[day] // Busca el bird segun el dia de la matriz y lo suma al total de birds final, con un busqueda lineal
  }
  return totalBirds
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const numberDaysInWeek = 7
  const startDay = (week -1) * numberDaysInWeek
  const endDay = startDay + numberDaysInWeek
  let totalBirds = 0
  for (let day = startDay; day < endDay; day++) {
    totalBirds += birdsPerDay[day] // Busca el bird segun el dia de la matriz y lo suma al total de birds final, con un busqueda lineal
  }
  return totalBirds
}

/** 
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1;
    }
  }
}
