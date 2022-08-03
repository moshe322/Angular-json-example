import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HemenAl';
  age:number = 45;
  content:string = "Hello world";
  isActive:boolean=true;

}
