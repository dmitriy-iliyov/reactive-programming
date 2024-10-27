import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})


export class AppComponent {
    name:string="Tom";
    age:number = 24;
    clicks:number = 0;

    onChanged(increased:any){
        increased==true?this.clicks++:this.clicks--;
    }
}