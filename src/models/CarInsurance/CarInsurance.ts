import { Product } from '../'
type ProductsArr = Array<Product>
export class CarInsurance {
  products: ProductsArr

  private portfolio: string[] = ['Medium Coverage', 'Full Coverage', 'Low Coverage', 'Mega Coverage', 'Special Full Coverage', 'Super Sale']

  private validateInputArr(productsArr: ProductsArr): void {
    return productsArr.forEach(({ price, name }) => {
      if (!this.portfolio.includes(name)) throw new Error('Invalid product name')
      if (price < 0) throw new Error('The price of a product should never be negative.')
      if (price > 50 && name !== 'Mega Coverage')
        throw new Error('The price of a product is never more than 50, unless it is the "Mega Coverage" product.')
      if (price !== 80 && name === 'Mega Coverage') throw new Error('The price "Mega Coverage" product should be 80.')
    })
  }

  constructor(productsArr: ProductsArr) {
    this.validateInputArr(productsArr)
    this.products = productsArr
  }

  updatePrice(): ProductsArr {
    return this.products.map(
      ({ name, sellIn, price }): Product => {
        switch (name) {
          case 'Mega Coverage':
            return { name, sellIn, price }
          default:
            throw new Error('Invalid product name')
        }
      }
    )
  }
}
