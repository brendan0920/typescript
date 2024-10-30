import { User } from "./user.class"
import { Product } from "./product.class"
import { Vendor } from "./vendor.class"
import { Request } from "./request.class"
import { LineItem } from "./line-item.class"

console.log("Welcome to the PRS TS App!");

import promptSync from "prompt-sync";
const prompt = promptSync();

let users: User[] = [];

// create some instances of users
// get user input for the values of our users
console.log("\nGet values for a User: ");
console.log("=======================");
let id: number = parseInt(prompt("ID: "));
let username: string = prompt("Username: ");
let password: string = prompt("Password: ");
let firstName: string = prompt("FirstName: ");
let lastName: string = prompt("LastName: ");
let phoneNumber: string = prompt("PhoneNumber: ");
let email: string = prompt("Email: ");
let u1: User = new User(id, username, password, firstName, lastName, phoneNumber, email);


//let reviewer: boolean = parseFloat
//let admin: boolean = parseFloat

// store them in a list of users
users.push(u1);

// print the users to the console
console.log("\nUsers: ")
console.log("=======")
for (let user of users) {
    console.log(user);
}

// var users: User[] = [
//     new User(1, 'bkeam', 'bk1234', 'Brendan', 'Keam', '917-624-6069', 'brdk1220@gmail.com', true, true),
//     new User(2, 'mdamon', 'md1234', 'Matt', 'Damon', '202-456-8975', 'mdamon@gmail.com', false, false),
//     new User(3, 'cbale', 'cb1234', 'Christian', 'Bale', '202-547-7783', 'cbale@gmail.com', false, false),
//     new User(4, 'baffleck', 'bf1234', 'Ben', 'Affleck', '917-554-8521', 'baffleck@gmail.com', false, false),
//     new User(5, 'Rmcadams', 'rm1234', 'Rachel', 'McAdams', '917-889-6325', 'rmcadams@gmail.com', false, false)
// ];

// var products: Product[] = [
//     new Product(1, 1, 'ME12B', 'Cavaillon Melons', 20.00, '10/cs', 'https://cdn-endpoint-website.azureedge.net/uploads/PhotoModel/22723/image/me12b1.product-card.jpg?t=1713988210'),
//     new Product(2, 1, 'SPSPICE99V', 'Sel Rose Pink Curing Salt', 5.00, '4oz', 'https://cdn-endpoint-website.azureedge.net/uploads/PhotoModel/14970/image/spspice99v.product-card.jpg?t=1713990356'),
//     new Product(3, 1, 'GRA92', 'Natural Thompson Grapes', 40.00, '12/2lb/cs', 'https://cdn-endpoint-website.azureedge.net/uploads/PhotoModel/9317/image/gra9.product-card.jpg?t=1722945636'),
//     new Product(4, 2, 'FDUPA008', "D'Artagnan Rohan Duck, Whole", 57.00, 'each', 'https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-live-catalog-en/default/dwa2bfad52/images/products/FDUPA006-1.jpg?sw=635&strip=false'),
//     new Product(5, 2, 'FDUFG002', 'Hudson Valley Grade-A Duck Foie Gras', 150.00, 'lobe', 'https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-live-catalog-en/default/dw1050a415/images/products/FoieGras_WholeLobe_PDP2.jpg?sw=635&strip=false'),
//     new Product(6, 2, 'GAMQUA007', 'Semi-Boneless Quail', 32.00, '4ea/cs', 'https://www.dartagnan.com/dw/image/v2/BJQL_PRD/on/demandware.static/-/Sites-dartagnan-live-catalog-en/default/dwec6300c6/images/products/FQUMA004-1_PDP1.jpg?sw=635&strip=false'),
//     new Product(7, 3, 'BB170', 'Grand Reserve / 80% Unsalted Butter Prints', 50.00, '36/1lb/cs', 'https://www.chefswarehouse.com/siteassets/pim-images/butter/bb170_0.jpg'),
//     new Product(8, 3, 'DM110', 'Cream-O-Land / Whole Milk Gallon', 50.00, '4/1gallon/cs', 'https://www.chefswarehouse.com/siteassets/pim-images/milk-cream/dm110_0.jpg'),
//     new Product(9, 3, 'DM116', 'Grand Reserve / 40% Heavy Cream', 4.00, '1qt', 'https://www.chefswarehouse.com/siteassets/pim-images/milk-cream/dm116_0.jpg'),
//     new Product(10, 4, '7290', 'Pure Saffron', 40.00, '1/1oz', 'https://www.gfifoods.com/media/catalog/product/cache/ea731b03951ff39bad0cb0d9b1c0aab7/s/a/saffron_beauty_2.jpg'),
//     new Product(11, 4, '10010', 'Madagascar Bourbon Vanilla Bean Paste Vegan Kosher', 30.00, '1/32oz', 'https://www.gfifoods.com/media/catalog/product/cache/ea731b03951ff39bad0cb0d9b1c0aab7/c/e/center20front_20210825_1519438_zizl3e7qqtykn6yg.jpg'),
//     new Product(12, 4, '614011', 'Espelette Pepper Powder PDO', 50.00, '1/1.58oz', 'https://www.gfifoods.com/media/catalog/product/cache/ea731b03951ff39bad0cb0d9b1c0aab7/6/1/6146120pic20espellette_jar_20210315_0942589_8dbjgufr9jylmifb.jpg'),
//     new Product(13, 5, '3053', 'Red Wine Vinegar', 16.00, '500ml', 'https://ciprianifood.com/media/catalog/product/cache/8101243140f76dbfe2f3e91f55026b96/c/i/ciprianifood_vinegar_1.jpg'),
//     new Product(14, 5, '3090', "Cipriani Pomod'oro", 6.00, '340g', 'https://ciprianifood.com/media/catalog/product/cache/8101243140f76dbfe2f3e91f55026b96/c/i/ciprianifood_pomodoro_label_1_1.jpg'),
//     new Product(15, 5, '2436', 'Extra Virgin Olive Oil', 29.00, '500ml', 'https://ciprianifood.com/media/catalog/product/cache/8101243140f76dbfe2f3e91f55026b96/c/i/ciprianifood_evoil_1.jpg'),
//     new Product(16, 6, 'BUR1', "Murray's Burrata", 12.00, '2/4oz', 'https://murrayscheese.imgix.net/i2b4juvwgl8trbwcyyr1cffdiuu4?ixlib=rails-4.3.1&auto=format&fit=max&w=576&q=80'),
//     new Product(17, 6, 'FET1', "Murray's Feta Cup", 11.00, '1/7oz', 'https://murrayscheese.imgix.net/z7j3fg6ugpf98rtrrq7il7z6zxmv?ixlib=rails-4.3.1&auto=format&fit=max&w=576&q=80'),
//     new Product(18, 6, 'PEC4', 'Pecorino Calabrese', 21.00, '1lb', 'https://murrayscheese.imgix.net/o8z5yshbk6a3xw5e9482ffaq569b?ixlib=rails-4.3.1&auto=format&fit=max&w=576&q=80')
// ];

// var vendors: Vendor[] = [
//     new Vendor(1, 'BF01', 'Baldor Specialty Foods', '55 Food Center Dr', 'Bronx', 'NY', '10474', '718-860-9000', 'info@baldorfood.com'),
//     new Vendor(2, 'DA01', "D'Artagnan", '600 Green Ln', 'Union', 'NJ', '07083', '877-858-0099', 'orders@dartagnan.com'),
//     new Vendor(3, 'CW01', "The Chefs' Warehouse", '240 Food Center Dr', 'Bronx', 'NY', '10474', '800-878-3247', 'chef@chefswarehouse.com'),
//     new Vendor(4, 'GF01', 'Gourmet Foods International', '38 Fairfield Place', 'West Caldwell', 'NJ', '07006', '973-487-3980', 'info@gfifoods.com'),
//     new Vendor(5, 'CP01', 'Cipriani', '376 West Broadway', 'New York', 'NY', '10012', '212-343-0999', 'downtown@cipriani.com'),
//     new Vendor(6, 'MC01', "Murray's Cheese", '254 Bleecker St', 'New York', 'NY', '10014', '212-243-3289', 'orders@murrayscheese.com')
// ];

// var requests: Request[] = [
//     new Request(
//         2, 3, 'R2409270002', 'test 02', 'test request', new Date('2024-11-10'), 'PICKUP', 'REVIEW', 570.00, new Date('2024-09-30T18:56:54.713Z'), 'any orders for test will be rejected!'
//     )
// ];

// var lineItems: LineItem[] = [
//     new LineItem(1, 2, 4, 10),
//     new LineItem(8, 15, 2, 120)
// ];

// for (let user in users) {
//     users[user].displayUsers();
// }

// for (let vendor in vendors) {
//     vendors[vendor].displayVendors();
// }

// for (let product in products) {
//     products[product].displayProducts();
// }

// for (let request in requests) {
//     requests[request].displayRequests();
// }

// for (let lineitem in lineItems) {
//     lineItems[lineitem].displayLineItems();
// }



console.log("Bye!!");