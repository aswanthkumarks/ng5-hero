import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  blogs: Array<Blog> = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe((data: Array<Blog>) => {
      this.blogs = data;
    });
  }

}
