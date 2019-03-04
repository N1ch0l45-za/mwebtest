import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie.model';
import { MoviesListService } from '../movies-list/movies-list.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  @Input('movie') movie: Movie;

  constructor( private svc: MoviesListService ) {
  }

  ngOnInit() {
  }

  ngDoChecked() {
  }
}
