import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lta-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
