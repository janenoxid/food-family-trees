import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { NaturalResourcesComponent } from './natural-resources/natural-resources.component';
import {ProcessedFoodsComponent} from './processed-foods/processed-foods.component';
import { ItemDetailsComponent } from './item-details/item-details.component';



const routes: Routes = [
  { path: 'processedFoods', component: ProcessedFoodsComponent},
  { path: 'ingredients', component: IngredientsComponent}, 
  { path: 'naturalResources', component: NaturalResourcesComponent}, 
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'detail/:id', component: ItemDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
