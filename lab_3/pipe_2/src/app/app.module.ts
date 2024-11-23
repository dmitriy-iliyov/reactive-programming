import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {FormatPipe} from "./format.pipes";
import {JoinPipe} from "./join.pipe";
import {SquarePipe} from "./square.pipe";


@NgModule({
    imports: [BrowserModule, FormsModule, FormsModule],
    declarations: [AppComponent, FormatPipe, JoinPipe, SquarePipe],
    bootstrap: [ AppComponent ]
})
export class AppModule { }