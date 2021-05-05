import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageScrollComponent } from './image-scroll/image-scroll.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageScrollComponent,
    ItemDetailsComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
