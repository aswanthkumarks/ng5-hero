import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AllMoviesComponent } from './all-movies/all-movies.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {
    path: 'movies', component: AllMoviesComponent,
    children: [
      { path: 'new', component: NewMovieComponent },
      { path: ':id', component: ShowComponent }
    ]
 },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AllMoviesComponent, NewMovieComponent, TopMoviesComponent, ShowComponent],
  exports: [
    TopMoviesComponent
  ]
})
export class MoviesModule { }
