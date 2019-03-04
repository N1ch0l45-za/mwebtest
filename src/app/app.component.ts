import { Component, AfterContentChecked } from '@angular/core';
import { Movie } from './movie/movie.model';
import { MoviesListService } from './movies-list/movies-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentChecked {
  movie: Movie;
  Show = false;

  constructor(private svc: MoviesListService) {
    this.movie = new Movie();
  }

  ngAfterContentChecked() {
    this.movie = this.svc.getMovie();
    this.Show = this.svc.getShowMovie();
  }
}
