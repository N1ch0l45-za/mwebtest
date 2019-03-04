import { Component, OnInit, Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesListService } from '../movies-list/movies-list.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-seachbar',
  templateUrl: './seachbar.component.html'
})
export class SeachbarComponent implements OnInit {

  title = 'Movie Search';
  dateMessage: string;
  search = '';
  Movies: any;

  constructor(private svc: MoviesListService, private http: HttpClient) {
    setInterval(() => {
      const currentDate = new Date();
      this.dateMessage = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    }, 1000);
  }

  searchMovies() {
    /*const obs = this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=927e23680c7313f80147b81ecf4d7f03&query=${this.search}`);
    obs.subscribe((res: any[]) => {
      console.log(res);
      this.Movies = res.results;
      console.log(this.Movies);
    });*/

    this.svc.MoviesList(this.search);
    this.search = '';
  }

  ngOnInit() {
  }

}
