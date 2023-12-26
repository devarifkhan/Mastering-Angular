import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_pipes';
  employees = [{
    name: 'John',
    state: 'Dhaka',
    salary:2000
  }, {
     name: 'King',
    state: 'HongKong',
    salary:20000
  }];
}
