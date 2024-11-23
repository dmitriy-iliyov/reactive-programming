import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {AsyncPipe} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [BrowserModule, HttpClientModule, AsyncPipe],
    declarations: [AppComponent],
    bootstrap: [ AppComponent ]
})


export class AppModule { }