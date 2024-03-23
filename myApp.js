"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Price: ").concat(this.price));
    };
    return Product;
}());
var ElectronicsProduct = /** @class */ (function (_super) {
    __extends(ElectronicsProduct, _super);
    function ElectronicsProduct(name, price, warrantyPeriod) {
        var _this = _super.call(this, name, price) || this;
        _this.warrantyPeriod = warrantyPeriod;
        return _this;
    }
    ElectronicsProduct.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Warranty Period: ".concat(this.warrantyPeriod, " years"));
    };
    return ElectronicsProduct;
}(Product));
var ClothingProduct = /** @class */ (function (_super) {
    __extends(ClothingProduct, _super);
    function ClothingProduct(name, price, size, color) {
        var _this = _super.call(this, name, price) || this;
        _this.size = size;
        _this.color = color;
        return _this;
    }
    ClothingProduct.prototype.displayInfo = function () {
        _super.prototype.displayInfo.call(this);
        console.log("Size: ".concat(this.size, ", Color: ").concat(this.color));
    };
    return ClothingProduct;
}(Product));
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
        console.log("".concat(product.getName(), " added to inventory"));
    };
    Inventory.prototype.removeProduct = function (productName) {
        var index = this.products.findIndex(function (product) { return product.getName() === productName; });
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log("".concat(productName, " removed from inventory"));
        }
        else {
            console.log("".concat(productName, " not found in inventory"));
        }
    };
    Inventory.prototype.displayInventory = function () {
        console.log("Inventory:");
        this.products.forEach(function (product) { return product.displayInfo(); });
    };
    return Inventory;
}());
// Usage
var inventory = new Inventory();
var laptop = new ElectronicsProduct("Laptop", 999, 2);
var shirt = new ClothingProduct("Shirt", 29.99, "M", "Blue");
inventory.addProduct(laptop);
inventory.addProduct(shirt);
inventory.displayInventory();
/*
Output:
Inventory:
Name: Laptop, Price: $999
Warranty Period: 2 years
Name: Shirt, Price: $29.99
Size: M, Color: Blue
*/
inventory.removeProduct("Laptop");
inventory.displayInventory();
