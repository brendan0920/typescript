import { Square } from "./square.class"
import { Friend } from "./friend.class"

let nbr1: number = 11;
let admin: boolean = false;
let firstName: string = "George";
let price: number = 25.99;
let message: string = `Hello, ${firstName}, the price is \$${price} `;

console.log(message);

let movie = {
    id: 1,
    title: "star wars",
    year: 1977,
    rating: "PG",
    director: "George Lucas"
};

console.log(movie);

let nbrs: string = "";
let evenNumbers: number[] = [2, 4, 6, 8, 10];
console.log("evenNumber: ", evenNumbers);

for (let i = 0; i <= evenNumbers.length; i++) {
    nbrs += evenNumbers[i] + ", ";
}
console.log(nbrs);

let a: any = 5;
a = "hello";
console.log(a);


const DAYS_OF_WEEK: number = 7;

// create a square
let s1: Square = new Square(5);
console.log("square area = " + s1.area);

//let friendList: Friend = new.Friend();

