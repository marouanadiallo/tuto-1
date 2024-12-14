import { ChangeDetectionStrategy, Component, input, output, } from "@angular/core";
import { User } from "../core/model/models";

@Component({
    selector: "app-show-user",
    standalone: true,
    imports: [],
    template: `
       <div [class.design] = "designUser()">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h2> User Details </h2>
                <button (click)="deleteUser()">Supprimer</button>
            </div>
            <p> Name: {{ user().name }} </p>
            <p> Age: {{ user().email }} </p>
            <p> Phone: {{ user().phone }} </p>
            <p> Address: {{ user().address }}
       </div>
    `,
    styles:[
        `
            .design {
                background-color: lightblue;
                padding: 10px;
                border-radius: 5px;
                margin: 10px;
                h2 {
                    font-weight: 500;
                }
                & p {
                    margin: 5px;
                }
                button {
                    background-color: red;
                    color: white;
                    padding: 5px;
                    border: none;
                    border-radius: 5px;
                }
            }
        `	
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowUserComponent {
  user = input.required<User, User>({ alias: "userData", transform: (data: User) => ({...data, name: data.name.toUpperCase()}) });
  designUser = input(false);

  onDeleteUser = output<string>({ alias: "deleteUser" });

  deleteUser(): void {
    this.onDeleteUser.emit(this.user().email);
  }
}
