import {Component, OnInit} from '@angular/core';
import {SearchProductsService} from "../../../services/search-products.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  show = false;

  constructor(public searchService: SearchProductsService) {
  }

  searchTitle: string = '';

  ngOnInit(): void {
    this.searchService.show$.subscribe((data: boolean) => {
      this.show = data
    })
  }
}
