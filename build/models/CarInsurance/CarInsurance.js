"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarInsurance = void 0;
var CarInsurance = /** @class */ (function () {
    function CarInsurance(productsArr) {
        this.portfolio = ['Medium Coverage', 'Full Coverage', 'Low Coverage', 'Mega Coverage', 'Special Full Coverage', 'Super Sale'];
        this.validateInputArr(productsArr);
        this.products = productsArr;
    }
    CarInsurance.prototype.validateInputArr = function (productsArr) {
        var _this = this;
        return productsArr.forEach(function (_a) {
            var price = _a.price, name = _a.name;
            if (!_this.portfolio.includes(name))
                throw new Error('Invalid product name');
            if (price < 0)
                throw new Error('The price of a product should never be negative.');
            if (price > 50 && name !== 'Mega Coverage')
                throw new Error('The price of a product is never more than 50, unless it is the "Mega Coverage" product.');
            if (price !== 80 && name === 'Mega Coverage')
                throw new Error('The price "Mega Coverage" product should be 80.');
        });
    };
    CarInsurance.prototype.updateFullCoverageProduct = function (_a) {
        var name = _a.name, sellIn = _a.sellIn, price = _a.price;
        var newPrice = price;
        if (newPrice > 49)
            newPrice = 50;
        newPrice = sellIn <= 0 ? price + 2 : price + 1;
        var newSellIn = sellIn - 1;
        return { name: name, sellIn: newSellIn, price: newPrice };
    };
    CarInsurance.prototype.updateSpecialFullCoverageProduct = function (_a) {
        var name = _a.name, sellIn = _a.sellIn, price = _a.price;
        var newPrice = price;
        if (price > 49)
            newPrice = 50;
        else if (sellIn < 1)
            newPrice = 0;
        else if (sellIn <= 5)
            newPrice = price + 3;
        else if (sellIn <= 10)
            newPrice = price + 2;
        else
            newPrice = price + 1;
        var newSellIn = sellIn - 1;
        return { name: name, sellIn: newSellIn, price: newPrice };
    };
    CarInsurance.prototype.updateSuperSaleProduct = function (_a) {
        var name = _a.name, sellIn = _a.sellIn, price = _a.price;
        var newPrice = price;
        if (newPrice > 49)
            newPrice = 50;
        newPrice = price >= 2 ? price - 2 : 0;
        return { name: name, sellIn: sellIn - 1, price: newPrice };
    };
    CarInsurance.prototype.updateNormalProduct = function (_a) {
        var name = _a.name, sellIn = _a.sellIn, price = _a.price;
        var newPrice = price;
        if (newPrice > 49)
            newPrice = 50;
        newPrice = price >= 1 ? price - 1 : 0;
        return { name: name, sellIn: sellIn - 1, price: newPrice };
    };
    CarInsurance.prototype.updatePrice = function () {
        var _this = this;
        this.products = this.products.map(function (_a) {
            var name = _a.name, sellIn = _a.sellIn, price = _a.price;
            switch (name) {
                case 'Mega Coverage':
                    return { name: name, sellIn: sellIn, price: price };
                case 'Full Coverage':
                    return _this.updateFullCoverageProduct({ name: name, sellIn: sellIn, price: price });
                case 'Special Full Coverage':
                    return _this.updateSpecialFullCoverageProduct({ name: name, sellIn: sellIn, price: price });
                case 'Super Sale':
                    return _this.updateSuperSaleProduct({ name: name, sellIn: sellIn, price: price });
                default:
                    return _this.updateNormalProduct({ name: name, sellIn: sellIn, price: price });
            }
        });
    };
    return CarInsurance;
}());
exports.CarInsurance = CarInsurance;
