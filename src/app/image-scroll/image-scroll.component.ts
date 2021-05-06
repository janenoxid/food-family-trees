import { Component, OnInit } from '@angular/core';
import {ProcessedFood} from '../processedFood';
import { ProcessedFoodService } from '../processed-food.service';

@Component({
  selector: 'app-image-scroll',
  templateUrl: './image-scroll.component.html',
  styleUrls: ['./image-scroll.component.css']
})
export class ImageScrollComponent implements OnInit {
  processedFoods: ProcessedFood[];
  

  constructor(private processedFoodService: ProcessedFoodService) { }

  getProcessedFoods(): void {
    this.processedFoodService.getProcessedFoods()
        .subscribe(processedFoods => this.processedFoods = processedFoods);
  }

  ngOnInit() {
    this.getProcessedFoods();
  }

}
