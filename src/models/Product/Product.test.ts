import { Product } from './Product'

describe('Product Class', () => {
  let product: Product
  beforeEach(() => {
    product = new Product('test', 1, 1)
  })

  it('Creates an instance of Product', () => {
    expect(product).toBeDefined()
  })
})
