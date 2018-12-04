import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showCategories = false;

  collapse() {
    this.showCategories = !this.showCategories;

  }
}
