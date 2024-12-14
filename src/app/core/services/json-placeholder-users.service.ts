import { inject, Injectable } from '@angular/core';
import { AbstractUser } from '../abstractions/abstracts';
import { User } from '../model/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class JsonPlaceholderUsersService extends AbstractUser {
  httpClient  = inject(HttpClient);

  override getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

}
