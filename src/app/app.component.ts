import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Processed Food Family Trees';
  food: string = 'Red Bull';
  ingredientsList: string[] = ['trash', 'more trash'];
}
