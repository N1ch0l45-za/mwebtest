import { Component } from '@angular/core';
import { Movie } from './movie/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  movie: Movie;

  constructor() {
    this.movie = new Movie();
    this.movie.id = 567701;
    this.movie.title = 'Jurassic World';
    this.movie.overview = 'Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.';
    this.movie.release_date = '2015-06-06';
    this.movie.vote_average = 6.6;
    this.movie.poster_path = '/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg';
  }
}
