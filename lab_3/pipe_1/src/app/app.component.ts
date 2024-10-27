import { Component} from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})


export class AppComponent {
    myDate = new Date(1961, 3, 12);
    welcome: string = "Hello World!";
    percentage: number = 0.14;
}