"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(id, requestId, productId, quantity) {
        this.id = id;
        this.requestId = requestId;
        this.productId = productId;
        this.quantity = quantity;
    }
}
exports.LineItem = LineItem;
var lineItems = [
    new LineItem(1, 2, 4, 10),
    new LineItem(8, 15, 2, 120)
];
function displayLineItems(lineItems) {
    lineItems.forEach(lineItem => {
        console.log(`ID: ${lineItem.id}, Request ID: ${lineItem.requestId}, Product ID: ${lineItem.productId}, Quantity: ${lineItem.quantity}`);
    });
}
displayLineItems(lineItems);
