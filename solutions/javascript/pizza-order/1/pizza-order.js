/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const ExtraToppingsPrrice = 2
  const ExtraSaucePrice = 1
  // Pizzas
  const MargheritaPrice = 7
  const CapresePrice = 9
  const FormaggioPrice = 10
  
  let price = 0
  const [extra, ...rest ] = extras
  
  switch (pizza){
    case 'Margherita':
      price += MargheritaPrice
      break;
    case 'Caprese':
      price += CapresePrice
      break;
    case 'Formaggio':
      price += FormaggioPrice
      break;
    case 'ExtraToppings':
      price += ExtraToppingsPrrice
      break;
    case 'ExtraSauce':
      price += ExtraSaucePrice
      break;
    default:
  }

  if(!extra){
    return price
  }
  
  return price + pizzaPrice(extra, ...rest);

}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let price = 0
  pizzaOrders.forEach((pizza)=> {
    price += pizzaPrice(pizza.pizza, ...pizza.extras)
  })
  return price
  
}
