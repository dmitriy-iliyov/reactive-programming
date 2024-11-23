import { Component } from '@angular/core'
import {UserService} from "./service/user.service";
import {User} from "./service/user";
import {Observable} from "rxjs";


@Component({
    selector: 'my-app',
    template: `
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let user of users | async">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.phone }}</td>
                <td>{{ user.website }}</td>
            </tr>
            </tbody>
        </table>
    `,
    styleUrls: ['./app.component.css'],
    providers: [UserService],
})


export class AppComponent{

    users: Observable<User[]>

    constructor(private userService: UserService) {
        this.users = userService.getUsers()
    }

}