import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSearchVisable: boolean = false;
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.buildSearchForm();
    this.location.onUrlChange(v => {
      this.isSearchVisable = v !== '/' ? true : false;
    })
  }

  buildSearchForm() {
    this.formGroup = this.formBuilder.group({
      mainSearch: [null]
    })
  }

  routeToDestination(id: number) {
    this.router.navigate(['/Destination', id]);
  }

  onSubmit() {
    this.routeToDestination(this.formGroup.value.mainSearch.id);
  }
}