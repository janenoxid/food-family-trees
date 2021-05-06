import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImageScrollComponent} from './image-scroll/image-scroll.component';


const routes: Routes = [
  { path: 'processedFoods', component: ImageScrollComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
