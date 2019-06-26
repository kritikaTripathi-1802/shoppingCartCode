import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ShoppingCartServiceService } from "./service/shopping-cart-service.service";
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ItemDetailComponent,
    ViewCartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShoppingCartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
