import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../ingredients';
import { ProcessedFoodService } from '../processed-food.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Ingredient[];


  constructor(private processedFoodService: ProcessedFoodService) { }

  getIngredients(): void {
    this.processedFoodService.getIngredients()
        .subscribe(ingredients => this.ingredients = ingredients);
  }

  ngOnInit() {
    this.getIngredients();
  }

}
