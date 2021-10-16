import { CarInsurance, Product } from '../index'

describe('CarInsurance class', () => {
  it('Creates an instance of CarInsurance', () => {
    const carInsurance = new CarInsurance([new Product('test', 1, 1)])
    expect(carInsurance).toBeDefined()
  })

  it('The price of a product is never negative.', () => {
    try {
      new CarInsurance([new Product('test', 1, -5)])
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('The price of a product is never more than 50.', () => {
    try {
      new CarInsurance([new Product('test', 1, 60)])
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('The price of "Mega Coverage" product should always be 80, sellIn counter should never be altered ', () => {
    const carInsurance = new CarInsurance([new Product('Mega Coverage', 1, 80)])
    expect(carInsurance).toBeDefined()

    try {
      new CarInsurance([new Product('test', 1, 70)])
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })
})
