"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var productsAtDayZero = [
    new models_1.Product('Medium Coverage', 10, 20),
    new models_1.Product('Full Coverage', 2, 0),
    new models_1.Product('Low Coverage', 5, 7),
    new models_1.Product('Mega Coverage', 0, 80),
    new models_1.Product('Mega Coverage', -1, 80),
    new models_1.Product('Special Full Coverage', 15, 20),
    new models_1.Product('Special Full Coverage', 10, 49),
    new models_1.Product('Special Full Coverage', 5, 49),
    new models_1.Product('Super Sale', 3, 6)
];
var carInsurance = new models_1.CarInsurance(productsAtDayZero);
var productPrinter = function (product) {
    console.log(product.name + ", " + product.sellIn + ", " + product.price);
};
for (var i = 1; i <= 30; i += 1) {
    console.log("Day " + i);
    console.log('name, sellIn, price');
    carInsurance.updatePrice();
    carInsurance.products.forEach(productPrinter);
    console.log('');
}
