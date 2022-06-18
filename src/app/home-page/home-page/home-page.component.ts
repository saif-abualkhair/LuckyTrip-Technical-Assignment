import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lta-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.buildSearchForm();
  }

  buildSearchForm() {
    this.formGroup = this.formBuilder.group({
      mainSearch: [null]
    })
  }

  routeToDestination() {
    this.router.navigate(['/Destination', this.formGroup.value.mainSearch.id])
  }
}