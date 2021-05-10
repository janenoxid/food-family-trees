import { Component, OnInit } from '@angular/core';
import { NaturalResource } from '../naturalResources';

@Component({
  selector: 'app-natural-resources',
  templateUrl: './natural-resources.component.html',
  styleUrls: ['./natural-resources.component.css']
})
export class NaturalResourcesComponent implements OnInit {
  corn = new NaturalResource(1, 'Corn', 'assets/images/natural-resources/corn.jpg', ["this", "that", "and the other"])

  constructor() { }

  ngOnInit() {
  }

}
