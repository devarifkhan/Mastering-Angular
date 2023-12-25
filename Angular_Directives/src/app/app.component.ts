import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Directives';
  age: number = 0;
  isEligible: boolean = false;
  checkEligibility() {
    this.isEligible = this.age >= 18;
}
}
