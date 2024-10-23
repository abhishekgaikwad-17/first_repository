import { Component } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrl: './propertycard.component.css'
})
export class PropertycardComponent {

  Property: any = {
    "Id": 1,
    "Name": "Gaikwad House",
    "Type": "House",
    "Price": 12000
  }
}
