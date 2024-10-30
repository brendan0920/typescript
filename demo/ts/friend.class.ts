export class Friend {
    name: string;
    age: number;
    email: string;
    bff: boolean;

    constructor(name: string, age: number, email: string, bff: boolean) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }

    displayInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}, BFF: ${this.bff ? 'Yes' : 'No'}`;
    }

}

// Create an array of Friends
var friends: Friend[] = [
    new Friend('Alice', 25, 'alice@example.com', true,),
    new Friend('Bob', 30, 'bob@example.com', false),
    new Friend('Charlie', 28, 'charlie@example.com', true),
    new Friend('Diana', 22, 'diana@example.com', false),
    new Friend('Ethan', 35, 'ethan@example.com', true)
];