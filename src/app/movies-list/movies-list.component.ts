import { Component, AfterContentChecked } from '@angular/core';
import { MoviesListService } from './movies-list.service';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements AfterContentChecked {

  movies: Movie[] = [];
  movieSelected;
  Show;

  constructor(private svc: MoviesListService) {
  }

  onSelected(movie: Movie) {
    console.log(movie);
    this.svc.setMovie(movie);
    this.svc.setShowMovie(true);
    this.svc.setShowMovieList(false);
    this.movieSelected = this.svc.getMovie();
  }

  ngAfterContentChecked() {
    this.movies = this.svc.getMoviesList();
    this.Show = this.svc.getShowMovieList();
  }
}
