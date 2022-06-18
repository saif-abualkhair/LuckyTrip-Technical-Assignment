import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ec-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css']
})
export class PopupWindowComponent implements OnInit, OnChanges {

  @Input() height?: string;
  @Input() isPopupOnScreen: boolean = false;

  slideOutClass?: string;
  _isPopupOnScreen: boolean = false;
  fadeOutClass?: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isPopupOnScreen'] && !changes['isPopupOnScreen'].isFirstChange()) {
      this.isPopupOnScreen ? this.openWindow() : this.closeWindow();
    }
  }

  openWindow() {
    this._isPopupOnScreen = this.isPopupOnScreen;
  }

  closeWindow() {
    this.fadeOutClass = 'popup_content_fade_out';
    this.slideOutClass = 'slide_out';
    setTimeout(() => {
      this._isPopupOnScreen = this.isPopupOnScreen;
      this.fadeOutClass = undefined;
      this.slideOutClass = undefined;
    }, 100);
  }

  ngOnInit(): void {
  }

}