import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-two-way-binding',
    standalone: true,
    imports: [ FormsModule ],
    template: `
        <input type="text" [(ngModel)]="yourName">
        <p>Titre : {{ yourName }}</p>
        <button (click)="submit()">Submit yourName</button>
    `
})
export class TwoWayBindingComponent implements OnInit {
  yourName: string = 'Alpha';

  ngOnInit() {
    this.yourName = 'Beta';
  }
  
  submit() {
    alert('Titre : ' + this.yourName);
  }
}