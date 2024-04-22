import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {TextResizePipe} from "./pipes/text-resize.pipe";
import {RouterLink, RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    TextResizePipe
  ],
  exports: [
    ProductCardComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterLinkActive,
        FormsModule,
        RouterLinkWithHref,
        RouterLink
    ]
})
export class SharedModule { }
