import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoutingModule } from './routing.module';


import { AppComponent } from './app.component';
import { TopNavComponent } from './hero/nav/top-nav/top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent
  ],
  imports: [
    RoutingModule,
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
