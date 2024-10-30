"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
console.log("Welocome to the Guess the Number Game");
console.log("+++++++++++++++++++++++++++++++++++++");
let choice = "y";
while (choice == "y") {
    console.log("\nI'm thining of a number form 1 to 100.");
    console.log("Try to guess it.\n");
    let randNbr = GetRandomNumber(100);
    console.log("");
    console.log(randNbr);
    console.log("");
    let userGuess = 0;
    let count = 0;
    while (userGuess != randNbr) {
        userGuess = getInt("Enter number: ", 1, 100);
        if (userGuess > randNbr) {
            if (userGuess - randNbr <= 10) {
                console.log("Too high!");
            }
            else {
                console.log("Way too high!");
            }
            count++;
        }
        else if (userGuess < randNbr) {
            if (randNbr - userGuess <= 10) {
                console.log("Too low!");
            }
            else {
                console.log("Way too low!");
            }
            count++;
        }
        else {
            count++;
            let message = `You got it in $(count} tries.`;
            if (count <= 3) {
                console.log(message);
                console.log("Great work! You are a mathematical wizard.");
            }
            else if (count > 3 && count <= 7) {
                console.log(message);
                console.log("Not too bad! You've got some potential.");
            }
            else {
                console.log(message);
                console.log("What took you so long? Maybe you should take some lessons.");
            }
        }
    }
    choice = GetString("Try again? (y/n): ", "y", "n");
}
console.log("Bye!!");
function GetRandomNumber(maxVal) {
    return Math.floor(Math.random() * maxVal) + 1;
}
function GetString(userInput, s1, s2) {
    let strValue = "";
    let isValid = false;
    while (!isValid) {
        strValue = prompt(userInput);
        if (strValue == "") {
            console.log("Error: entry is required.");
            continue;
        }
        else if (strValue != s1 && strValue != s2) {
            console.log(`Error: entry must be either '${s1}' or '${s2}'.`);
            continue;
        }
        else {
            break;
        }
    }
    return strValue;
}
function getInt(userInput, min, max) {
    let number = 0;
    let isValid = false;
    while (!isValid) {
        try {
            number = parseInt(prompt(userInput));
            if (number < min) {
                console.log(`Invalid entry: number less than min (${min})`);
                continue;
            }
            else if (number > max) {
                console.log(`Invalid entry: number greater than max (${max})`);
                continue;
            }
            else {
                break;
            }
        }
        catch (e) {
            console.log("Invalid entry: please enter a valid integer.");
            continue;
        }
    }
    return number;
}
