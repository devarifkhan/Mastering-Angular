import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Directives';
  fullStackDev = [{
    id: 1,
    name: 'Angular',
  },
    {
      id: 2,
      name:"JavaScript"
    }, {
      id: 3,
      name: "Python"
    }, {
      id: 4,
      name:"Node.js"
    }, {
      id: 5,
      name:"Mongo DB"
  }];
}
