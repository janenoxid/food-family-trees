import { Component } from '@angular/core';
import {NaturalResource} from './naturalResources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Processed Food Family Trees';

  constructor() { }

  ngOnInit() {
  }
  
}
