import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DestinationForReturn } from '../models/destination-for-return.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = `${environment.apiUrl}`;
  constructor(private httpClinet: HttpClient) { }

  getDestinations(term: string) {
    const url = `${this.url}destinations?search_type=city_or_country&search_value=${term}`;
    return this.httpClinet.get<DestinationForReturn>(url);
  }
}