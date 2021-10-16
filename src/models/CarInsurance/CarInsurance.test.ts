import { CarInsurance, Product } from '../index'

describe('CarInsurance class', () => {
  it('Creates an instance of CarInsurance as long as the name is included in the private property portfolio', () => {
    const carInsurance = new CarInsurance([
      new Product('Medium Coverage', 10, 20),
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Mega Coverage', -1, 80),
      new Product('Special Full Coverage', 5, 49),
      new Product('Super Sale', 3, 6)
    ])
    expect(carInsurance).toBeDefined()
    try {
      new CarInsurance([new Product('test', 1, 24)])
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('The price of a product is never negative.', () => {
    try {
      new CarInsurance([new Product('Medium Coverage', 1, -5)])
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('The price of a product is never more than 50.', () => {
    try {
      new CarInsurance([new Product('Medium Coverage', 1, 60)])
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })

  it('The price of "Mega Coverage" product should always be 80, sellIn counter should never be altered ', () => {
    const carInsurance = new CarInsurance([new Product('Mega Coverage', 12, 80), new Product('Mega Coverage', 23, 80)])
    carInsurance.updatePrice()

    expect(carInsurance.products[0].sellIn).toEqual(12)
    expect(carInsurance.products[1].sellIn).toEqual(23)
    expect(carInsurance.products[0].price).toEqual(80)
    expect(carInsurance.products[1].price).toEqual(80)

    try {
      new CarInsurance([new Product('Medium Coverage', 1, 70)])
    } catch (err) {
      expect(err).toBeInstanceOf(Error)
    }
  })
})
