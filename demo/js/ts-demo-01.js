"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const square_class_1 = require("./square.class");
let nbr1 = 11;
let admin = false;
let firstName = "George";
let price = 25.99;
let message = `Hello, ${firstName}, the price is \$${price} `;
console.log(message);
let movie = {
    id: 1,
    title: "star wars",
    year: 1977,
    rating: "PG",
    director: "George Lucas"
};
console.log(movie);
let nbrs = "";
let evenNumbers = [2, 4, 6, 8, 10];
console.log("evenNumber: ", evenNumbers);
for (let i = 0; i <= evenNumbers.length; i++) {
    nbrs += evenNumbers[i] + ", ";
}
console.log(nbrs);
let a = 5;
a = "hello";
console.log(a);
const DAYS_OF_WEEK = 7;
// create a square
let s1 = new square_class_1.Square(5);
console.log("square area = " + s1.area);
