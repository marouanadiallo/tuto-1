import { Component, EventEmitter, input, Input, Output } from "@angular/core";

@Component({
    selector: "tuto-show-user",
    standalone: true,
    imports: [],
    template: `
        <div>
            <h2>{{ user().name }}</h2>
            <p>Age: {{ user().age }}</p>
        </div>
        <div>
            <button (click)="deleteUser()">Delete user</button>
        </div>
    `
})
export class ShowUserComponent {
   // @Input({ required: true, alias: "userData", transform: toUpperCase }) user: { id: number, name: string; age: number } | undefined; // input user data
    @Output() onDeleteUserEvent = new EventEmitter<number>();// output event
    user = input.required<{ id: number, name: string; age: number }>({alias: 'userData'}); // input user data

    deleteUser() {
       // emit event
        this.onDeleteUserEvent.emit(this.user()?.id);
    }

}
// transform function
function toUpperCase(value: { id: number, name: string; age: number }): { id: number, name: string; age: number } {
    return { ...value, name: value.name.toUpperCase() };
}