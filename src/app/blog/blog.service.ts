import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Blog } from './blog.model';

@Injectable()
export class BlogService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(environment.blogApi + '/posts', {});
  }

}
