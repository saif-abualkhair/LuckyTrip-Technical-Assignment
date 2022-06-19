import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DestinationInfoForList } from '../models/destination/destination-info-for-list.model';

@Component({
  selector: 'lta-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

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
