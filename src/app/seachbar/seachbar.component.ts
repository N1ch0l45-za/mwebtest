import { Component, EventEmitter, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesListService } from '../movies-list/movies-list.service';
import { throwError } from 'rxjs';
import { Movie } from '../movie/movie.model';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-seachbar',
  templateUrl: './seachbar.component.html'
})
export class SeachbarComponent {
  @Output() MoviesList =  new EventEmitter();
  Movies: Movie[];

  title = 'Movie Search';
  dateMessage: string;
  search = '';

  constructor(private svc: MoviesListService, private http: HttpClient) {
    setInterval(() => {
      const currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
  }

  searchMovies() {
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=927e23680c7313f80147b81ecf4d7f03&query=${this.search}`)
    .subscribe(
      data => {
        const myArray = [];
        for (const key in data.results) {
          myArray.push(data.results[key]);
        }
        this.Movies = myArray;
        this.svc.setMoviesList(this.Movies);
        this.svc.setShowMovie(false);
        this.svc.setShowMovieList(true);
      });
    this.search = '';
  }
}
