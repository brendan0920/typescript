export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    reviewer: boolean;
    admin: boolean;

    constructor(id: number = 0, username: string = "", password: string = "", firstName: string = "",
        lastName: string = "", phoneNumber: string = "", email: string = "",
        reviewer: boolean = false, admin: boolean = false) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.reviewer = reviewer;
        this.admin = admin;
    }

    displayUsers(): void {
        console.log(`ID: ${this.id}, Username: ${this.username}, Name: ${this.firstName} ${this.lastName}, Phone: ${this.phoneNumber}, Email: ${this.email}, Reviewer: ${this.reviewer}, Admin: ${this.admin}`);
    }
}

// var users: User[] = [
//     new User(1, 'bkeam', 'bk1234', 'Brendan', 'Keam', '917-624-6069', 'brdk1220@gmail.com', true, true),
//     new User(2, 'mdamon', 'md1234', 'Matt', 'Damon', '202-456-8975', 'mdamon@gmail.com', false, false),
//     new User(3, 'cbale', 'cb1234', 'Christian', 'Bale', '202-547-7783', 'cbale@gmail.com', false, false),
//     new User(4, 'baffleck', 'bf1234', 'Ben', 'Affleck', '917-554-8521', 'baffleck@gmail.com', false, false),
//     new User(5, 'Rmcadams', 'rm1234', 'Rachel', 'McAdams', '917-889-6325', 'rmcadams@gmail.com', false, false)
// ];

// function displayUsers(users: User[]): void {
//     users.forEach(user => {
//         console.log(`ID: ${user.id}, Username: ${user.username}, Name: ${user.firstName} ${user.lastName}, Phone: ${user.phoneNumber}, Email: ${user.email}, Reviewer: ${user.reviewer}, Admin: ${user.admin}`);
//     });
// }

// displayUsers(users);