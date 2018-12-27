import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/productservice';
import { appService } from './../../services/mahaliServices/mahali.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  product;
  constructor(private router: Router, public productService: ProductService,private appService: appService,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
    if (params.action === "search") {
      this.product = params.product;
      this.search(this.product);
      // this.wholeProd = false;
      // this.serProd = true;
    }
  })
  }

  ngOnInit() {
    this.getCategories();
  }
  showCategories = false;

  collapse() {
    this.showCategories = !this.showCategories;

  }
  showProduxtDetails() {
    this.router.navigate(['/productdetails'], { queryParams: { order: 'popular' } });
  }
  category = [];
  getCategories() {
    this.appService.getCategories().subscribe(resp => {
        this.category = resp.json().categories;
        // this.showSubCat(this.subId);
        for(var i=0;i<this.category.length;i++){
          for(var j=0;j<this.category[i].subcategory.length;j++){
            this.subCatData.push(this.category[i].subcategory[j]);
            console.log(this.subCatData);
          }
        }
    })
  }
  subCatData =[];
  subId;
  serProducts = [];
  search(product) {
    this.appService.searchProducts(product).subscribe(res => {
      this.serProducts = res.json().data;
    }, err => {

    })
  }
}
