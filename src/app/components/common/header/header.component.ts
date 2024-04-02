import {Component, OnInit} from '@angular/core';
import {SearchProductsService} from "../../../services/search-products.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //searchProducts: string = '';
  constructor(public searchProducts: SearchProductsService) {}

  ngOnInit(): void {
  }

}
