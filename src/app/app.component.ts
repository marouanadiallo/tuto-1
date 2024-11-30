import { ChangeDetectionStrategy, Component, computed, effect, OnInit, Signal, signal, WritableSignal } from '@angular/core';

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  private _userAge= signal(2008);
  userName: WritableSignal<string> = signal('John Doe');

  ageCalulated: Signal<number> = computed(() =>  2024 - this._userAge()); // le résultat sera mise en cache

  userNameCapitalized: Signal<string> = computed(() => {
    console.log('$_ComputedFunc : log from userNameCapitalized');
    return this.userName().toUpperCase();
  });

  constructor() {
    effect(() => {
      console.log('$_Effect (change username) : ', this.userName());
    });
  }

  ngOnInit() {}

  setUser(name: string) {
    this.userName.set(name);
    this._userAge.set(2000);
  }

  capitalizeUserName() {
    return this.userName().toUpperCase();
  }

  showBanner() {
    if (this.ageCalulated() > 18) {
      console.log('$_Signal : showBanner');
    } else {
      console.log('$_Signal : showBanner');
    }
  }
}
