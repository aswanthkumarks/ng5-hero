import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from './routing.module';
import { MoviesModule } from './movies/movies.module';
import { BlogModule } from './blog/blog.module';


import { AppComponent } from './app.component';
import { TopNavComponent } from './hero/nav/top-nav/top-nav.component';
import { DashboardComponent } from './hero/dashboard/dashboard.component';
import { HerosComponent } from './hero/heros/heros.component';
import { HeroComponent } from './hero/heros/hero/hero.component';
import { NewHeroComponent } from './hero/heros/new-hero/new-hero.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DashboardComponent,
    HerosComponent,
    HeroComponent,
    NewHeroComponent,
  ],
  imports: [
    RoutingModule,
    MoviesModule,
    BlogModule,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
