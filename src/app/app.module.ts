import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SeachbarComponent } from './seachbar/seachbar.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesItemComponent } from './movies-list/movies-item.component';
import { MoviesListService } from './movies-list/movies-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SeachbarComponent,
    MovieComponent,
    MoviesListComponent,
    MoviesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MoviesListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
