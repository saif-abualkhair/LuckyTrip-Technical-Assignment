import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { DestinationForReturn } from '../shared/models/destination/destination-for-return.model';
import { DestinationService } from '../shared/services/destination.service';

@Injectable({
  providedIn: 'root'
})
export class DestinationResolver implements Resolve<DestinationForReturn> {

  constructor(private destinationService: DestinationService, private router:Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): DestinationForReturn | Observable<DestinationForReturn> | Promise<DestinationForReturn> {
    return this.destinationService.getDestination(route.params['id']).pipe(tap(v => {
      console.log(v)
    }, err => {
      this.router.navigate(['error-page']);
    }));
  }
}