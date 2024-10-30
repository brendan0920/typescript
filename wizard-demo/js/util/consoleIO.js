"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleIO = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class ConsoleIO {
    getRandomNumber(maxVal) {
        return Math.floor(Math.random() * maxVal) + 1;
    }
    getWholeNumber(userInput) {
        let nbr = 0;
        let success = false;
        while (!success) {
            console.log();
            let strInput = prompt(userInput);
            nbr = Number(strInput);
            if (!isNaN(nbr) && Number.isInteger(nbr)) {
                success = true;
            }
            else {
                console.log("Invalid entry, Must be a whole number. Try again!");
            }
        }
        return nbr;
    }
    getString1(userInput) {
        let strValue = "";
        let isValid = false;
        while (!isValid) {
            strValue = prompt(userInput).toLocaleLowerCase();
            if (strValue == "") {
                console.log("Error: entry is required.");
                continue;
            }
            else {
                break;
            }
        }
        return strValue;
    }
    getString2(userInput, s1, s2) {
        let strValue = "";
        let isValid = false;
        while (!isValid) {
            strValue = prompt(userInput).toLocaleLowerCase();
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
    getInt(userInput, min, max) {
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
}
exports.ConsoleIO = ConsoleIO;
