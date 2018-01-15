import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router/src/router_module';

const routes: Routes =  [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component:  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
