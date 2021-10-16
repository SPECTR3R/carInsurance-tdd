// These aliases are just for documentation purposes only, the value is still type number
type integer = number
type positive = number
export class Product {
  name: string
  sellIn: integer
  price: positive

  constructor(name: string, sellIn: integer, price: positive) {
    this.name = name
    this.sellIn = sellIn
    this.price = price
  }
}
