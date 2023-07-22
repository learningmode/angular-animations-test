import { Component } from '@angular/core';
import { Course } from './models/Course.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses:Course[] =[{
    title:'Angular',
    isActive: false
  },
  {
    title:'Angular Unit Testing',
    isActive: false
  },
  {
    title:'Angular Rxjs',
    isActive: true
  }];
  title = 'angular-animations-test';
}
