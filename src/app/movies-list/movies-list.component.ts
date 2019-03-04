import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { MoviesListService } from './movies-list.service';
import { Movie } from '../movie/movie.model';
import { MOVIES } from './mock-movies-list';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html'
})
export class MoviesListComponent implements OnInit {

  @Input() Movies: Movie[];
  movies: Movie[] = MOVIES;

  @Output() MovieSelected = new EventEmitter<Movie>();

  constructor(private svc: MoviesListService) {
  }

  onSelected(movie: Movie) {
    this.MovieSelected.emit(movie);
  }

  ngOnInit() {
    this.svc.Movies.subscribe(Movies => {
      this.Movies = Movies;
    });
  }
}