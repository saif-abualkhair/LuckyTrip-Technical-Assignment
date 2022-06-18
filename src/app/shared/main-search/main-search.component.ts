import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DestinationForReturn } from '../models/destination-for-return.model';
import { Destination } from '../models/destination.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'lta-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MainSearchComponent),
      multi: true,
    }
  ]
})
export class MainSearchComponent implements OnInit, ControlValueAccessor {

  onChange = (_: any) => { };
  onTouched = () => { };
  isLoading: boolean = false;
  isPopupOnScreen: boolean = false;
  controlValue?: Destination;
  isDisabled: boolean = false;
  destinationForReturn?: DestinationForReturn;
  term: string = "";
  constructor(private searchService: SearchService) { }

  writeValue(value: Destination): void {
    this.controlValue = value;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onValueChange(event: any) {
    this.controlValue = undefined;
    this.term = event.target.value;
    this.searchValue();
  }

  searchValue() {
    this.isLoading = true;
    this.searchService.getDestinations(this.term).subscribe(data => {
      this.isLoading = false;
      this.destinationForReturn = data;
    });
  }

  ngOnInit(): void {
  }

  onItemClick(item: Destination) {
    this.onChange(item)
    this.controlValue = item
  }

  onFocus() {
    this.searchValue();
    this.isPopupOnScreen = true;
    this.onTouched();
  }

  onFocusOut() {
    this.isPopupOnScreen = false;
  }

  onGoClick() {
  }
}