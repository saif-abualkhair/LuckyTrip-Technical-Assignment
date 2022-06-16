import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'lta-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isSearchVisable: boolean = false;

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.location.onUrlChange(v => {
      this.isSearchVisable = v !== '/' ? true : false;
    })
  }
}