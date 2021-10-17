import { Product } from '../'
type ProductsArr = Array<Product>

function updateFullCoverageProduct({ name, sellIn, price }: Product): Product {
  let newPrice = price
  if (newPrice > 49) newPrice = 50
  newPrice = sellIn <= 0 ? price + 2 : price + 1
  const newSellIn = sellIn - 1
  return { name, sellIn: newSellIn, price: newPrice }
}
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

  updatePrice(): void {
    this.products = this.products.map(
      ({ name, sellIn, price }): Product => {
        switch (name) {
          case 'Mega Coverage':
            return { name, sellIn, price }
          case 'Full Coverage': {
            const updatedFullCoverageProduct = updateFullCoverageProduct({ name, sellIn, price })
            return updatedFullCoverageProduct
          }
          default:
            throw new Error('Invalid product name')
        }
      }
    )
  }
}
