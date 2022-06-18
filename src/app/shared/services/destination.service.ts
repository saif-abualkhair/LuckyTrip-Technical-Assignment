import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DestinationForList } from '../models/destination/destination-for-list.model';
import { DestinationForReturn } from '../models/destination/destination-for-return.model';


@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  url: string = `${environment.apiUrl}`;
  constructor(private httpClinet: HttpClient) { }

  getDestination(id: number) {
    const url = `${this.url}destination?id=${id}`;
    return this.httpClinet.get<DestinationForReturn>(url);
  }

  searchDestinations(term: string) {
    const url = `${this.url}destinations?search_type=city_or_country&search_value=${term}`;
    return this.httpClinet.get<DestinationForList>(url);
  }
}