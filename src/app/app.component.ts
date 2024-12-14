import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

import { ShowUserComponent } from './show-user/show-user.component';

import { User } from './core/model/models';
import { AbstractUser } from './core/abstractions/abstracts';

import { JsonPlaceholderUsersService } from './core/services/json-placeholder-users.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'tuto-root',
  standalone: true,
  imports: [ AsyncPipe, ShowUserComponent ],
  providers:[
    { provide: AbstractUser, useExisting: JsonPlaceholderUsersService }
  ],
  templateUrl: './app.component.html',
  styleUrls:  ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  
  // Notre class AppComponent va dependre de la class UserDataService
  //userDaaService: LocalUserService = new LocalUserService();

  userDataService = inject(AbstractUser);

  userSelected: User | null = null;
  users$: Observable<User[]> = this.userDataService.getUsers();

  ngOnInit(): void {
      
  }

  deleteUserEvent(email: string): void {
    this.userSelected = null;
  }

  showUserDetails(user: User): void {
    this.userSelected = user;
  }
}
