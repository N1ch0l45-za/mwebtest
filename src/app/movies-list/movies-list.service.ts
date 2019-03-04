import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie/movie.model';

@Injectable()

export class MoviesListService {
  constructor(private http: HttpClient) {}

  private data;

  fetchData(search) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=927e23680c7313f80147b81ecf4d7f03&query=${search}`)
    .subscribe((res: any[]) => [res.results, console.log(res.results)]);
  }

  selectMovie(id) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=927e23680c7313f80147b81ecf4d7f03`)
    .subscribe((res: any[]) => [res.results, console.log(res.results)]);
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  @Output() Movies: EventEmitter<Movie> = new EventEmitter();

  MoviesList(title) {
    this.Movies.emit(this.fetchData(title));
  }
}
