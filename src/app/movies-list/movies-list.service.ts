import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class MoviesListService {
  constructor(private http: HttpClient) {}

  private MovieList: any = [];
  private SingleMovie: any;
  private _ShowList: boolean;
  private _ShowMovie: boolean;

  getMoviesList () {
    return this.MovieList;
  }

  setMoviesList(MovieList) {
    this.MovieList = MovieList;
  }

  getMovie () {
    return this.SingleMovie;
  }

  setMovie(SingleMovie) {
    this.SingleMovie = SingleMovie;
  }

  setShowMovieList(_ShowList) {
    this._ShowList = _ShowList;
  }

  getShowMovieList() {
    return this._ShowList;
  }

  setShowMovie(_ShowMovie) {
    this._ShowMovie = _ShowMovie;
  }

  getShowMovie() {
    return this._ShowMovie;
  }

}
