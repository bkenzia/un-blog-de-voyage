import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styleUrls: ['./button-back.component.css'],
})
export class ButtonBackComponent {
  constructor(private location: Location) {}
  backClicked() {
    this.location.back();
  }
}
