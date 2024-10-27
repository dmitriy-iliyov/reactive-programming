import {Component, EventEmitter, Input, Output} from "@angular/core";


@Component({
    selector: 'child-component-2',
    template: ` <button (click)="change(true)">+</button>
                <button (click)="change(false)">-</button>`,
    styles: [`h2, p {
        color: black;
    }`]
})


export class ChildComponentExercise2{

    @Output() onChanged = new EventEmitter<boolean>();

    change(increased:any) {
        this.onChanged.emit(increased);
    }
}