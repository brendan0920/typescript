"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(id, title, year, rating, director) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.rating = rating;
        this.director = director;
    }
    displayMovies() {
        console.log(`ID: ${this.id}, Title: ${this.title}, Year: ${this.year}, Rating: ${this.rating}, Director: ${this.director}`);
    }
}
exports.Movie = Movie;
// var movies: Movie[] = [
//     new Movie(1, "The Dark Knight", 2008, "PG-13", "Christopher Nolan"),
//     new Movie(2, "Joker", 2019, "R", "Todd Phillips"),
//     new Movie(3, "The Notebook", 2004, "PG-13", "Nick Cassavetes"),
//     new Movie(4, "Good Will Hunting", 1997, "R", "Gus Van Sant"),
//     new Movie(5, "Unbroken", 2014, "PG-13", "Angelina Jolie")
// ];
// function displayMovies(movies: Movie[]): void {
//     movies.forEach(movie => {
//         console.log(`ID: ${movie.id}, Title: ${movie.title}, Year: ${movie.year}, Rating: ${movie.rating}, Director: ${movie.director}`);
//     });
// }
// displayMovies(movies);
