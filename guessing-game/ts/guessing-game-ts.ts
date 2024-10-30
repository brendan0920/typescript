import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Welocome to the Guess the Number Game");
console.log("+++++++++++++++++++++++++++++++++++++");


let choice: string = "y";
while (choice == "y") {
    console.log("\nI'm thining of a number form 1 to 100.");
    console.log("Try to guess it.\n");
    let randNbr: number = GetRandomNumber(100);

    console.log("");
    console.log(randNbr);
    console.log("");

    let userGuess: number = 0;
    let count: number = 0;
    while (userGuess != randNbr) {
        userGuess = getInt("Enter number: ", 1, 100);

        if (userGuess > randNbr) {
            if (userGuess - randNbr <= 10) {
                console.log("Too high!")
            } else {
                console.log("Way too high!")
            }
            count++;
        } else if (userGuess < randNbr) {
            if (randNbr - userGuess <= 10) {
                console.log("Too low!")
            } else {
                console.log("Way too low!");
            }
            count++;
        } else {
            count++;
            let message: string = `You got it in $(count} tries.`;
            if (count <= 3) {
                console.log(message);
                console.log("Great work! You are a mathematical wizard.");
            } else if (count > 3 && count <= 7) {
                console.log(message);
                console.log("Not too bad! You've got some potential.");
            } else {
                console.log(message);
                console.log("What took you so long? Maybe you should take some lessons.");
            }
        }

    }

    choice = GetString("Try again? (y/n): ", "y", "n");
}
console.log("Bye!!");


function GetRandomNumber(maxVal: number): number {
    return Math.floor(Math.random() * maxVal) + 1;
}

function GetString(userInput: string, s1: string, s2: string): string {
    let strValue: string = "";
    let isValid: boolean = false;
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

function getInt(userInput: string, min: number, max: number): number {
    let number: number = 0;
    let isValid: boolean = false;

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

