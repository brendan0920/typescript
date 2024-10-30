"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItem = void 0;
class LineItem {
    constructor(id = 0, request, product, quantity = 0) {
        this.id = id;
        this.request = request;
        this.product = product;
        this.quantity = quantity;
    }
    displayLineItems() {
        console.log(`ID: ${this.id}, Request ID: ${this.request}, Product ID: ${this.product}, Quantity: ${this.quantity}`);
    }
}
exports.LineItem = LineItem;
// var lineItems: LineItem[] = [
//     new LineItem(1, 2, 4, 10),
//     new LineItem(8, 15, 2, 120)
// ];
// function displayLineItems(lineItems: LineItem[]): void {
//     lineItems.forEach(lineItem => {
//         console.log(`ID: ${lineItem.id}, Request ID: ${lineItem.requestId}, Product ID: ${lineItem.productId}, Quantity: ${lineItem.quantity}`);
//     });
// }
// displayLineItems(lineItems);
