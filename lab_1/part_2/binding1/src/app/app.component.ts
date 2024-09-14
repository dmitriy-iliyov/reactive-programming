import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent{
    name = "Tom";
    age = 25;
    colspan = 2;
    count = 0;

    increase():void{
        this.count++;
    }
}