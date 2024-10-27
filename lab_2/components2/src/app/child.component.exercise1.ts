import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
    selector: 'child-component-1',
    template: ` <p>Ім’я користувача: {{userName}}</p>
                <p>Вік користувача: {{userAge}}</p>`,
    styles: [`h2, p {
        color: black;
    }`]
})


export class ChildComponentExercise1{
    @Input() userName: string = "";
    _userAge: number = 0;

    @Input()
    set userAge(age: number){
        if(age<0)
            this._userAge=0;
        else if(age>100)
            this._userAge=100;
        else
            this._userAge = age;
    }

    get userAge() { return this._userAge; }
}