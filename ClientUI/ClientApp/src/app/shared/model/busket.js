"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = void 0;
var v4_1 = require("uuid/v4");
var Basket = /** @class */ (function () {
    function Basket() {
        this.id = v4_1.default();
        this.items = [];
    }
    return Basket;
}());
exports.Basket = Basket;
//# sourceMappingURL=busket.js.map