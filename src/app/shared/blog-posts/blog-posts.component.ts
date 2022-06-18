import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DestinationInfoForList } from '../models/destination/destination-info-for-list.model';

@Component({
  selector: 'lta-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  @Input() title?: string;
  @Input() posts?: DestinationInfoForList[];
  @Input() isLoading: boolean = false;
  @Output() onPostClick: EventEmitter<DestinationInfoForList> = new EventEmitter<DestinationInfoForList>();
  constructor() { }

  ngOnInit(): void {
  }

  _onPostClick(post: DestinationInfoForList) {
    this.onPostClick.emit(post);
  }

}
