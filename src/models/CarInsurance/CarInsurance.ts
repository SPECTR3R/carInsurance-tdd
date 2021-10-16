import { Product } from '../'
type ProductsArr = Array<Product>
export class CarInsurance {
  products: ProductsArr

  constructor(productsArr: ProductsArr) {
    productsArr.forEach(({ price, name }) => {
      if (price < 0) throw new Error('The price of a product is never negative.')
      if (price > 50 && name !== 'Mega Coverage')
        throw new Error('The price of a product is never more than 50, unless it is the "Mega Coverage" product.')
      if (price !== 80 && name === 'Mega Coverage') throw new Error('The price "Mega Coverage" product should be 80.')
    })
    this.products = productsArr
  }

  updatePrice(): ProductsArr {
    return this.products.map(
      ({ name, sellIn, price }): Product => {
        switch (name) {
          case 'full coverage':
            return { name, sellIn, price }
          default:
            throw new Error('Invalid product name')
        }
      }
    )
  }
}
