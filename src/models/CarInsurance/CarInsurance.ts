import { Product } from '../'
type ProductsArr = Array<Product>

export class CarInsurance {
  constructor(productsArr: ProductsArr) {
    this.validateInputArr(productsArr)
    this.products = productsArr
  }

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
  private updateFullCoverageProduct({ name, sellIn, price }: Product): Product {
    let newPrice = price
    if (newPrice > 49) newPrice = 50
    newPrice = sellIn <= 0 ? price + 2 : price + 1
    const newSellIn = sellIn - 1
    return { name, sellIn: newSellIn, price: newPrice }
  }
  private updateSpecialFullCoverageProduct({ name, sellIn, price }: Product): Product {
    let newPrice = price
    if (price > 49) newPrice = 50
    else if (sellIn < 1) newPrice = 0
    else if (sellIn <= 5) newPrice = price + 3
    else if (sellIn <= 10) newPrice = price + 2
    else newPrice = price + 1
    const newSellIn = sellIn - 1
    return { name, sellIn: newSellIn, price: newPrice }
  }
  private updateSuperSaleProduct({ name, sellIn, price }: Product): Product {
    let newPrice = price
    if (newPrice > 49) newPrice = 50
    newPrice = price >= 2 ? price - 2 : 0
    return { name, sellIn: sellIn - 1, price: newPrice }
  }
  private updateNormalProduct({ name, sellIn, price }: Product): Product {
    let newPrice = price
    if (newPrice > 49) newPrice = 50
    newPrice = price >= 1 ? price - 1 : 0
    return { name, sellIn: sellIn - 1, price: newPrice }
  }

  updatePrice(): void {
    this.products = this.products.map(
      ({ name, sellIn, price }): Product => {
        switch (name) {
          case 'Mega Coverage':
            return { name, sellIn, price }
          case 'Full Coverage':
            return this.updateFullCoverageProduct({ name, sellIn, price })
          case 'Special Full Coverage':
            return this.updateSpecialFullCoverageProduct({ name, sellIn, price })
          case 'Super Sale':
            return this.updateSuperSaleProduct({ name, sellIn, price })
          default:
            return this.updateNormalProduct({ name, sellIn, price })
        }
      }
    )
  }
}
