"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credit = void 0;
class Credit {
    constructor(id, actorId, movieId, role) {
        this.id = id;
        this.actorId = actorId;
        this.movieId = movieId;
        this.role = role;
    }
    displayCredits() {
        console.log(`ID: ${this.id}, Movie ID: ${this.movieId}, Actor ID: ${this.actorId}, Role: ${this.role}`);
    }
    ;
}
exports.Credit = Credit;
// var credits: Credit[] = [
//     new Credit(1, 1, 1, 'Bruce Wayne, Batman'),
//     new Credit(2, 2, 1, 'Joker'),
//     new Credit(3, 3, 2, 'Arthur Fleck'),
//     new Credit(4, 4, 2, 'Murray Franklin'),
//     new Credit(5, 5, 3, 'Noah'),
//     new Credit(6, 6, 3, 'Allie'),
//     new Credit(7, 7, 4, 'Will')
// ];
// function displayCredits(credits: Credit[]): void {
//     credits.forEach(credit => {
//         console.log(`ID: ${credit.id}, Movie ID: ${credit.movieId}, Actor ID: ${credit.actorId}, Role: ${credit.role}`);
//     });
// }
// displayCredits(credits);