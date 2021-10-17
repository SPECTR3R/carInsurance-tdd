import { CarInsurance, Product } from '../index'

describe('CarInsurance class', () => {
  it('Creates an instance of CarInsurance as long as the names in the productsArr parameter are included in the private property portfolio', () => {
    const carInsurance = new CarInsurance([
      new Product('Full Coverage', 2, 0),
      new Product('Low Coverage', 5, 7),
      new Product('Medium Coverage', 10, 20),
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

  it('The price of "Full Coverage" product should increase by 1 the older it gets, once the sell by date has passed, it should increase by 2.', () => {
    const carInsurance = new CarInsurance([new Product('Full Coverage', 2, 0), new Product('Full Coverage', -1, 4)])
    carInsurance.updatePrice()
    expect(carInsurance.products[0].sellIn).toEqual(1)
    expect(carInsurance.products[0].price).toEqual(1)
    expect(carInsurance.products[1].sellIn).toEqual(-2)
    expect(carInsurance.products[1].price).toEqual(6)
  })

  it('The price of "Special Full Coverage" product should increase by 1 the older it gets, increase by 2 when there are 10 days or less and by 3 when there are 5 days or less but, once the sell by date has passed, price drops to 0.', () => {
    const carInsurance = new CarInsurance([
      new Product('Special Full Coverage', 15, 20),
      new Product('Special Full Coverage', 10, 46),
      new Product('Special Full Coverage', 3, 45)
    ])
    carInsurance.updatePrice()
    expect(carInsurance.products[0].sellIn).toEqual(14)
    expect(carInsurance.products[0].price).toEqual(21)
    expect(carInsurance.products[1].sellIn).toEqual(9)
    expect(carInsurance.products[1].price).toEqual(48)
    expect(carInsurance.products[2].sellIn).toEqual(2)
    expect(carInsurance.products[2].price).toEqual(48)
  })
})
