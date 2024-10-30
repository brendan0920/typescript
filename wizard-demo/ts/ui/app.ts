import { Item } from "../model/item.class"
import { ConsoleIO } from "../util/consoleIO"

import promptSync from "prompt-sync";
const prompt = promptSync();


var consoleIO: ConsoleIO = new ConsoleIO();

let items: Item[] = [
    new Item(1, "wooden staff"),
    new Item(2, "wizard hat"),
    new Item(3, "cloth shoes")
];

console.log("Welcome to the Wizard Inventory game!!");

displayMenu();

let choice: string = "y";
while (choice == "y") {

    let command: string = "";
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


function displayMenu(): void {
    console.log("\nCOMMAND MENU");
    console.log("show - Show all items");
    console.log("grab - Grab an item");
    console.log("edit - Edit an item");
    console.log("drop - Drop an item");
    console.log("exit - Exit program");
}

function showItem(): void {
    for (let i = 0; i < items.length; i++) {
        if (items.length < 1) {
            console.log("No existing items! Add item first!")
            displayMenu();
        } else {
            console.log(`${i + 1}. ${items[i].name}`)
        }
    }

    // for (let item of items) {
    //     console.log(item);
    // }
}

function addItem(): void {
    if (items.length != 4) {
        //let id: number = consoleIO.getInt("ID: ", items.length + 1, items.length + 1);
        let id: number = items.length + 1;
        let name: string = consoleIO.getString1("Enter an item to add: ");
        let item: Item = new Item(id, name);
        items.push(item);
        console.log(`${id}. ${name} was added!`);
    } else {
        console.log("You can't carry more than 4 items! Drop item first!!");
    }
}

function editItem(): void {
    let itemNum: number = consoleIO.getInt("ID to edit: ", 1, items.length);
    let itemName: string = consoleIO.getString1("Name to update: ");
    items[itemNum - 1].name = itemName;
    console.log(`${itemNum} has been updated!`);
}

function deleteItem(): void {
    let itemNum: number = consoleIO.getInt("ID to delete (endter '0' to retrun to'Menu'): ", 0, items.length);
    if (itemNum === 0) {
        console.log("");
        displayMenu();
    } else {
        let delItem: Item = items[itemNum - 1];
        items.splice(itemNum - 1, 1);
        //console.log(`${delItem.id-1}. ${delItem.name} has been removed!`);
        console.log(`${itemNum}. ${delItem.name} has been removed!`);
    }
}