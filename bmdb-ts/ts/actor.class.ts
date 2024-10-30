export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthDate: Date;

    constructor(id: number, firstName: string, lastName: string, gender: string, birthDate: Date) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDate = birthDate;
    }

    displayActors(): void {
        console.log(`${this.firstName} ${this.lastName} (${this.gender}), Birthdate: ${this.birthDate.toISOString().split('T')[0]}`);
    };
}

// var actors: Actor[] = [
//     new Actor(1, 'Christian', 'Bale', 'Male', new Date('1974-01-30')),
//     new Actor(2, 'Heath', 'Ledger', 'Male', new Date('1979-01-22')),
//     new Actor(3, 'Joaquin', 'Phoenix', 'Male', new Date('1974-10-28')),
//     new Actor(4, 'Robert', 'De Niro', 'Male', new Date('1943-08-17')),
//     new Actor(5, 'Ryan', 'Gosling', 'Male', new Date('1980-11-12')),
//     new Actor(6, 'Rachel', 'McAdams', 'Female', new Date('1978-11-17')),
//     new Actor(7, 'Matt', 'Damon', 'Male', new Date('1970-10-08')),
//     new Actor(8, 'Ben', 'Affleck', 'Male', new Date('1972-08-15')),
//     new Actor(9, 'Robin', 'Williams', 'Male', new Date('1957-07-21')),
//     new Actor(10, 'Jack', "O'Connell", 'Male', new Date('1990-08-01'))
// ];

// function displayActors(actors: Actor[]): void {
//     actors.forEach(actor => {
//         console.log(`${actor.firstName} ${actor.lastName} (${actor.gender}), Birthdate: ${actor.birthDate.toISOString().split('T')[0]}`);
//     })
// }

// displayActors(actors);