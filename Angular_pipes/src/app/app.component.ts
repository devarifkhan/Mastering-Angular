import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_pipes';
  userDetails = {
    name: "Arif",
    email: "arif@gmail.com",
    address: {
      street: '23 steet st',
      city: 'las vegas',
      state: ' nevada',
      zip:88901
    }
  }

}
