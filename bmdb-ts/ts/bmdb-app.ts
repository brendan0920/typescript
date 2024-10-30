import { Movie } from "./movie.class"
import { Actor } from "./actor.class"
import { Credit } from "./credit.class"

var actors: Actor[] = [
    new Actor(1, 'Christian', 'Bale', 'Male', new Date('1974-01-30')),
    new Actor(2, 'Heath', 'Ledger', 'Male', new Date('1979-01-22')),
    new Actor(3, 'Joaquin', 'Phoenix', 'Male', new Date('1974-10-28')),
    new Actor(4, 'Robert', 'De Niro', 'Male', new Date('1943-08-17')),
    new Actor(5, 'Ryan', 'Gosling', 'Male', new Date('1980-11-12')),
    new Actor(6, 'Rachel', 'McAdams', 'Female', new Date('1978-11-17')),
    new Actor(7, 'Matt', 'Damon', 'Male', new Date('1970-10-08')),
    new Actor(8, 'Ben', 'Affleck', 'Male', new Date('1972-08-15')),
    new Actor(9, 'Robin', 'Williams', 'Male', new Date('1957-07-21')),
    new Actor(10, 'Jack', "O'Connell", 'Male', new Date('1990-08-01'))
];

var credits: Credit[] = [
    new Credit(1, 1, 1, 'Bruce Wayne, Batman'),
    new Credit(2, 2, 1, 'Joker'),
    new Credit(3, 3, 2, 'Arthur Fleck'),
    new Credit(4, 4, 2, 'Murray Franklin'),
    new Credit(5, 5, 3, 'Noah'),
    new Credit(6, 6, 3, 'Allie'),
    new Credit(7, 7, 4, 'Will')
];

var movies: Movie[] = [
    new Movie(1, "The Dark Knight", 2008, "PG-13", "Christopher Nolan"),
    new Movie(2, "Joker", 2019, "R", "Todd Phillips"),
    new Movie(3, "The Notebook", 2004, "PG-13", "Nick Cassavetes"),
    new Movie(4, "Good Will Hunting", 1997, "R", "Gus Van Sant"),
    new Movie(5, "Unbroken", 2014, "PG-13", "Angelina Jolie")
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
