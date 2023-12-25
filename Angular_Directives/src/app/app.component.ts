import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Directives';
  show: boolean= false;
  listItems = [{
    name: "Arif",
    age:23
  }, {
    name: "Jack",
    age:25
    }, {
    name: "Bella",
      age:24
  }]
}
