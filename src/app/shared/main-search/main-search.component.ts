import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DestinationForList } from '../models/destination/destination-for-list.model';
import { DestinationInfoForList } from '../models/destination/destination-info-for-list.model';

import { DestinationService } from '../services/destination.service';

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

  @Output() onNewSearch: EventEmitter<DestinationForList> = new EventEmitter<DestinationForList>();
  @Output() isLoading: EventEmitter<boolean> = new EventEmitter<boolean>();


  _isLoading: boolean = false;
  isPopupOnScreen: boolean = false;
  controlValue?: DestinationInfoForList;
  isDisabled: boolean = false;
  destinationForList?: DestinationForList;
  term: string = "";
  constructor(private destinationService: DestinationService) { }

  writeValue(value: DestinationInfoForList): void {
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
    this._isLoading = true;
    this.isLoading.emit(this._isLoading);
    this.destinationService.searchDestinations(this.term).subscribe(data => {
      this.destinationForList = data;
      this.onNewSearch.emit(this.destinationForList);
      this._isLoading = false;
      this.isLoading.emit(this._isLoading);
    },err=>{
      this._isLoading = false;
      this.isLoading.emit(this._isLoading);
    });
  }

  ngOnInit(): void {
  }

  onItemClick(item: DestinationInfoForList) {
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