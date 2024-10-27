import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ChildComponentExercise2} from "./child.component.exercise2";
import {ChildComponentExercise1} from "./child.component.exercise1";


@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [AppComponent, ChildComponentExercise1, ChildComponentExercise2],
    bootstrap: [ AppComponent ]
})
export class AppModule { }