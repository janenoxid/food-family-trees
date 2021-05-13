import { Component, OnInit } from '@angular/core';
import {ProcessedFood} from '../processedFood';
import {Ingredient} from '../ingredients';
import { ProcessedFoodService } from '../processed-food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  processedFoods: ProcessedFood[];
  ingredients: Ingredient[];

  constructor(private processedFoodService: ProcessedFoodService) { }

  getProcessedFoods(): void {
    this.processedFoodService.getProcessedFoods()
        .subscribe(processedFoods => this.processedFoods = processedFoods);
  }

  getIngredients(): void {
    this.processedFoodService.getIngredients()
        .subscribe(ingredients => this.ingredients = ingredients);
  }

  ngOnInit() {
    this.getProcessedFoods();
    this.getIngredients();
  }

}
