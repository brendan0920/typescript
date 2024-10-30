"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_class_1 = require("../model/item.class");
const consoleIO_1 = require("../util/consoleIO");
var consoleIO = new consoleIO_1.ConsoleIO();
let items = [
    new item_class_1.Item(1, "wooden staff"),
    new item_class_1.Item(2, "wizard hat"),
    new item_class_1.Item(3, "cloth shoes")
];
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
console.log("Welcome to the Wizard Inventory game!!");
displayMenu();
let choice = "y";
while (choice == "y") {
    let command = "";
    while (command != "exit") {
        console.log("");
        command = consoleIO.getString1("Command: ");
        switch (command) {
            case ("show"):
                showItem();
                break;
            case ("grab"):
                addItem();
                break;
            case ("edit"):
                editItem();
                break;
            case ("drop"):
                deleteItem();
                break;
            case ("exit"):
                break;
            default:
                console.log("Invalid command. Try again!");
                break;
        }
    }
    console.log("");
    choice = consoleIO.getString2("Try again? (y/n): ", "y", "n");
    if (choice == "y") {
        displayMenu();
    }
}
console.log("\nBye!");
function displayMenu() {
    console.log("\nCOMMAND MENU");
    console.log("show - Show all items");
    console.log("grab - Grab an item");
    console.log("edit - Edit an item");
    console.log("drop - Drop an item");
    console.log("exit - Exit program");
}
function showItem() {
    for (let i = 0; i < items.length; i++) {
        console.log(`${items[i].id}. ${items[i].name}`);
    }
    // for (let item of items) {
    //     console.log(item);
    // }
}
function getMaxId(items) {
    let maxId = 0; // Start with 0 as the initial maximum ID
    for (let i = 0; i < items.length; i++) {
        if (items[i].id > maxId) {
            maxId = items[i].id; // Update maxId if current item's ID is greater
        }
    }
    return maxId; // Return the highest ID found
}
function addItem() {
    if (items.length != 4) {
        //let id: number = consoleIO.getInt("ID: ", items.length + 1, items.length + 1);
        // let id: number = items.length + 1;
        // // Find the highest ID in the current items
        // let maxId = items.reduce((max, item) => Math.max(max, item.id), 0);
        // Use the getMaxId function
        let maxId = getMaxId(items);
        // Set new ID as one higher than the current max ID
        let id = consoleIO.getInt("ID: ", maxId + 1, maxId + 1);
        let name = consoleIO.getString1("Enter an item to add: ");
        let item = new item_class_1.Item(id, name);
        items.push(item);
        console.log(`${id}. ${name} was added!`);
    }
    else {
        console.log("You can't carry more than 4 items! Drop item first!!");
    }
}
function editItem() {
    let itemNum = consoleIO.getInt("ID to edit: ", 1, items.length);
    let itemName = consoleIO.getString1("Name to update: ");
    items[itemNum - 1].name = itemName;
    console.log(`${itemNum} has been updated!`);
}
function deleteItem() {
    let itemNum = consoleIO.getInt("ID to delete (endter '0' to retrun to'Menu'): ", 0, items.length);
    if (itemNum === 0) {
        console.log("");
        displayMenu();
    }
    else {
        let delItem = items[itemNum - 1];
        items.splice(itemNum - 1, 1);
        console.log(`${delItem.id}. ${delItem.name} has been removed!`);
    }
}
