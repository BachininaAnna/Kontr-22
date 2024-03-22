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
import {ReactiveFormsModule} from "@angular/forms";
import {ProductCardComponent} from "./components/common/product-card/product-card.component";
import {ProductService} from "./services/product-service.service";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    OrderComponent,
    MainComponent,
    ProductComponent,
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
