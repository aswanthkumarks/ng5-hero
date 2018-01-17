import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BlogService } from './blog.service';

import { BlogComponent } from './blog/blog.component';
import { ListComponent } from './list/list.component';

const route: Routes = [
  { path: 'blog', component: BlogComponent,
    children: [
      { path: '', component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(route)
  ],
  declarations: [BlogComponent, ListComponent],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
