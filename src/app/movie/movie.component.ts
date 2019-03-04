import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

  @Input('movie') movie: Movie;
  @Input('MovieSelected') movie: Movie;

  constructor() {
  }

  ngOnInit() {
  }

}
