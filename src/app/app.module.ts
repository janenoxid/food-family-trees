import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageScrollComponent } from './image-scroll/image-scroll.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageScrollComponent,
    ItemDetailsComponent,
    IngredientsComponent,
    EditDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  master = 'Master';
}
