import { Product } from "./product.class";
import { Request } from "./request.class";

export class LineItem {
    id: number;
    request?: Request;
    product?: Product;
    quantity: number;

    constructor(id: number = 0, request?: Request, product?: Product, quantity: number = 0) {
        this.id = id;
        this.request = request;
        this.product = product;
        this.quantity = quantity;
    }

    displayLineItems(): void {
        console.log(`ID: ${this.id}, Request ID: ${this.request}, Product ID: ${this.product}, Quantity: ${this.quantity}`);
    }
}

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