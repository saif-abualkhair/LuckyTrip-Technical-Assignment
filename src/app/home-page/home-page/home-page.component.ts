import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationForList } from 'src/app/shared/models/destination/destination-for-list.model';
import { DestinationInfoForList } from 'src/app/shared/models/destination/destination-info-for-list.model';
import { DestinationService } from 'src/app/shared/services/destination.service';

@Component({
  selector: 'lta-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  formGroup!: FormGroup;
  destinationForList?: DestinationForList;
  isLoading: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private destinationService: DestinationService) { }

  ngOnInit(): void {
    this.buildSearchForm();
    this.getTrendingSection();
  }

  getTrendingSection() {
    this.destinationService.searchDestinations('').subscribe(data => {
      this.destinationForList = data;
    });
  }

  buildSearchForm() {
    this.formGroup = this.formBuilder.group({
      mainSearch: [null]
    })
  }

  onPostClick($event: DestinationInfoForList) {
    this.routeToDestination($event.id);
  }

  isSearchLoading($event: boolean) {
    this.isLoading = $event;
  }

  onNewSearch($event: DestinationForList) {
    this.destinationForList = $event;
  }

  routeToDestination(id: number) {
    this.router.navigate(['/Destination', id])
  }

  onSubmit() {
    this.routeToDestination(this.formGroup.value.mainSearch.id);
  }
}