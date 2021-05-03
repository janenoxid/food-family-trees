import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-scroll',
  templateUrl: './image-scroll.component.html',
  styleUrls: ['./image-scroll.component.css']
})
export class ImageScrollComponent implements OnInit {
  images = [
    {name: "Twinkies", altText: "Box of Twinkies", image: "assets/images/twinkie.png"},
    {name: "Nutella", altText: "Jar of Nutella", image: "assets/images/nutella.png"},
    {name: "Raisin Nut Bran", altText: "Box of Raisin Nut Bran", image: "assets/images/raisinnutbran.png"},
    {name: "Red Bull", altText: "Can and carton of Red Bull", image: "assets/images/redbull.png"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
