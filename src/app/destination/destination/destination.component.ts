import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestinationForReturn } from 'src/app/shared/models/destination/destination-for-return.model';

@Component({
  selector: 'lta-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {
  destinationForReturn?: DestinationForReturn;

  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.destinationForReturn = this.activatedRoute.snapshot.data['resolveData'] as DestinationForReturn;
  }
}