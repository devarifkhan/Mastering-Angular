import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  subjectList = [
    {
      subCode: 101,
      name: "JavaScript"

    },
    {
      subCode: 102,
      name:"C++"
    }
]

}
