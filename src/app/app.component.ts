import { Component, OnInit } from '@angular/core';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { CounterComponent } from './two-way-binding/counter.component';
import { ShowUserComponent } from './show-user/show-user.component';

@Component({
  selector: 'tuto-root',
  standalone: true,
  imports: [ ShowUserComponent, CounterComponent ],
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss'], // styles: [], stylesUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  protected title = 'Live twitch Angular';
  initialCount = 18;
  enabled = false;

  users = [{
    id: 1,
    name: 'Max',
    age: -4
  }, {
    id: 2,
    name: 'Chris',
    age: 30
  }, {
    id: 3,
    name: 'Anna',
    age: 25
  }
  ];

  ngOnInit() {
    this.title = 'Hello World!';
    setTimeout(() => {
      this.initialCount = 20;
    }, 2000);
  }


  changeTitle() {
    this.title = 'Hello Angular team!';
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
