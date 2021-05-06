import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  @Input('master') masterName: string; //tslint:disable-line: no-input-rename

  constructor() { }

  ngOnInit() {
  }

}
