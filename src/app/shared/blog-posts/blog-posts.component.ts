import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lta-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  @Input() title?: string;
  @Input() posts?: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
