import { CarInsurance } from './CarInsurance'

describe('Palindrome checker', () => {
  let carInsurance: CarInsurance
  beforeEach(() => {
    carInsurance = new CarInsurance()
  })

  it('exists', () => {
    expect(carInsurance).toBeDefined()
  })
})
