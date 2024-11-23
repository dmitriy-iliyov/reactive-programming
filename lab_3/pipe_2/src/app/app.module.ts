import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {FormatPipe} from "./format.pipes";
import {JoinPipe} from "./join.pipe";
import {DatePipe} from "@angular/common";


@NgModule({
    imports: [BrowserModule, FormsModule, DatePipe],
    declarations: [AppComponent, FormatPipe, JoinPipe],
    bootstrap: [ AppComponent ]
})
export class AppModule { }