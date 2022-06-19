import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DestinationForReturn } from 'src/app/shared/models/destination/destination-for-return.model';

@Component({
  selector: 'lta-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit, OnDestroy {
  destinationForReturn?: DestinationForReturn;
  navigationSubscription?: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnDestroy(): void {
    if (this.navigationSubscription)
      this.navigationSubscription.unsubscribe();
  }


  ngOnInit(): void {
    this.destinationForReturn = this.activatedRoute.snapshot.data['resolveData'] as DestinationForReturn;
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        // this.initialiseInvites();
        this.destinationForReturn = this.activatedRoute.snapshot.data['resolveData'] as DestinationForReturn;
      }
    });
  }
}