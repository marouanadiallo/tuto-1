import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'tuto-root',
  standalone: true,
  imports: [ 
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss'], // styles: [], stylesUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  enabled = true;

  users: {id: number; name: string; age: number; gender: 'homme' | 'femme' | 'autre'}[]  = [];


  ngOnInit() {}

  charger() {
    this.users = [
      {id: 1, name: 'John', age: 25, gender: 'homme'},
      {id: 2, name: 'Jane', age: 24, gender: 'femme'},
      {id: 3, name: 'Jim', age: 30, gender: 'autre'},
    ];
  }
  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  trackByFn(index: number, item: any) {
    return item.name;
  }
}
