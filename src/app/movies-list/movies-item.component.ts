import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html'
})
export class MoviesItemComponent implements OnInit {

  @Input() movie: Movie;
  movieId: number;

  constructor() { }

  ngOnInit() {
  }

}
