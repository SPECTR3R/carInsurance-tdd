import { Product } from './Product'

describe('Palindrome checker', () => {
  let product: Product
  beforeEach(() => {
    product = new Product()
  })

  it('exists', () => {
    expect(product).toBeDefined()
  })
})
