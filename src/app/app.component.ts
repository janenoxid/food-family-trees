import { Component } from '@angular/core';
import {NaturalResource} from './naturalResources';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Processed Food Family Trees';
  corn = new NaturalResource(1, 'Corn', 'image of corn', ["this", "that", "and the other"])

  constructor() { }

  ngOnInit() {
  }
  
}
