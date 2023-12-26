import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  a = 10;
  b = 20;
  calc() {
    return this.a + this.b;
  }
}
