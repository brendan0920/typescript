"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_class_1 = require("./movie.class");
const actor_class_1 = require("./actor.class");
const credit_class_1 = require("./credit.class");
var actors = [
    new actor_class_1.Actor(1, 'Christian', 'Bale', 'Male', new Date('1974-01-30')),
    new actor_class_1.Actor(2, 'Heath', 'Ledger', 'Male', new Date('1979-01-22')),
    new actor_class_1.Actor(3, 'Joaquin', 'Phoenix', 'Male', new Date('1974-10-28')),
    new actor_class_1.Actor(4, 'Robert', 'De Niro', 'Male', new Date('1943-08-17')),
    new actor_class_1.Actor(5, 'Ryan', 'Gosling', 'Male', new Date('1980-11-12')),
    new actor_class_1.Actor(6, 'Rachel', 'McAdams', 'Female', new Date('1978-11-17')),
    new actor_class_1.Actor(7, 'Matt', 'Damon', 'Male', new Date('1970-10-08')),
    new actor_class_1.Actor(8, 'Ben', 'Affleck', 'Male', new Date('1972-08-15')),
    new actor_class_1.Actor(9, 'Robin', 'Williams', 'Male', new Date('1957-07-21')),
    new actor_class_1.Actor(10, 'Jack', "O'Connell", 'Male', new Date('1990-08-01'))
];
var credits = [
    new credit_class_1.Credit(1, 1, 1, 'Bruce Wayne, Batman'),
    new credit_class_1.Credit(2, 2, 1, 'Joker'),
    new credit_class_1.Credit(3, 3, 2, 'Arthur Fleck'),
    new credit_class_1.Credit(4, 4, 2, 'Murray Franklin'),
    new credit_class_1.Credit(5, 5, 3, 'Noah'),
    new credit_class_1.Credit(6, 6, 3, 'Allie'),
    new credit_class_1.Credit(7, 7, 4, 'Will')
];
var movies = [
    new movie_class_1.Movie(1, "The Dark Knight", 2008, "PG-13", "Christopher Nolan"),
    new movie_class_1.Movie(2, "Joker", 2019, "R", "Todd Phillips"),
    new movie_class_1.Movie(3, "The Notebook", 2004, "PG-13", "Nick Cassavetes"),
    new movie_class_1.Movie(4, "Good Will Hunting", 1997, "R", "Gus Van Sant"),
    new movie_class_1.Movie(5, "Unbroken", 2014, "PG-13", "Angelina Jolie")
];
for (let actor in actors) {
    actors[actor].displayActors();
}
console.log();
for (let movie in movies) {
    movies[movie].displayMovies();
}
console.log();
for (let credit in credits) {
    credits[credit].displayCredits();
}
