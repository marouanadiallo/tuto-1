import { Observable } from "rxjs";
import { User } from "../model/models";

export abstract class AbstractUser {
    abstract getUsers(): Observable<User[]>;
}