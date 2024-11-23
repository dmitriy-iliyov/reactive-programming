import { Component, OnInit} from '@angular/core';
import { HttpService} from './http.service';
import {Observable} from 'rxjs';
import {User} from "./user.interface";


@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li *ngFor="let user of users | async">
                <p>Ім’я користувача: {{user.name}}</p>
                <p>Вік користувача: {{user.age}}</p>
            </li>
        </ul>
    `,
    providers: [HttpService]
})


export class AppComponent implements OnInit {
    users: Observable<User[]>|undefined;

    constructor(private httpService: HttpService){}

    ngOnInit(){
        this.users = this.httpService.getUsers();
        this.users.subscribe(users => {
            console.log('Полученные пользователи:', users);
        });
    }
}