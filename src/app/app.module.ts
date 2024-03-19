import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrderComponent} from './components/pages/order/order.component';
import {MainComponent} from './components/pages/main/main.component';
import {ProductComponent} from './components/pages/product/product.component';
import {ProductsComponent} from './components/pages/products/products.component';
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {ProductCardComponent} from './components/pages/product-card/product-card.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    MainComponent,
    ProductComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
