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
  type;
  constructor(private router: Router, public productService: ProductService,private appService: appService,private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
    if (params.action === "search") {
      this.product = params.product;
      this.search(this.product);
      // this.wholeProd = false;
      // this.serProd = true;
      this.seeAll =false;
      this.searchProd = true;
    }
    if(params.action === "deals"){
      this.type = params.action;
      this.dealOfDay();
      this.seeAll =true;
      this.searchProd = false;
    }else if(params.action === "typeProd") {
      this.type = params.action;
      this.dealOfDay();
      this.seeAll =true;
      this.searchProd = false;
    }else if(params.action === "cloth"){
      this.type = params.action;
      this.getCloth();
      this.seeAll =true;
      this.searchProd = false;
    } else if(params.action === "jewel") {
      this.type = params.action;
      this.getJewel();
      this.seeAll =true;
      this.searchProd = false;
    }else if(params.action === "recent") {
      this.type = params.action;
      this.getEcom();
      this.seeAll =true;
      this.searchProd = false;
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
  seeAll=false;
  searchProd=false;
  search(product) {
    this.searchProd = true;
    this.appService.searchProducts(product).subscribe(res => {
      this.serProducts = res.json().data;
    }, err => {

    })
  }
  dealData=[];
  topOfrs=[];
  skuData=[];
  skuArr=[];
  topsku=[];
  topArr=[];
  dealOfDay(){
    this.appService.dealOfDay().subscribe(res=> {
        this.dealData =res.json().data.deals_of_the_day; 
        this.topOfrs = res.json().data.top_offers;
        if(this.type==="deals"){
          for(var i =0;i<this.dealData.length;i++){
            // this.prodName = this.dealData[i].product_name;
            for(var j=0;j<this.dealData[i].sku_details.length;j++) {
                this.dealData[i].sku_details[j].product_name=this.dealData[i].product_name;
                this.skuData = this.dealData[i].sku_details[j];
                this.skuArr.push(this.skuData);
            }
          
        }
        }else if(this.type==="typeProd"){
          for(var i =0;i<this.topOfrs.length;i++){
            // this.prodName = this.dealData[i].product_name;
            for(var j=0;j<this.topOfrs[i].sku_details.length;j++) {
                this.topOfrs[i].sku_details[j].product_name=this.topOfrs[i].product_name;
                this.topsku = this.dealData[i].sku_details[j];
                this.skuArr.push(this.topsku);
            }
          
        }
        }
       
       
    })
}
cartDetails=[];
  cartCount;
  addtoCart(Id, skId) {
    var inData = {
      "products": [{
        product_id: Id,
        sku_id: skId
      }],
      "vendor_id": JSON.parse(localStorage.getItem('userId')),
      "item_type":"ecommerce"
    }
    this.appService.addtoCart(inData).subscribe(res => {
      this.getCart();
      this.cartDetails = res.json().selling_price_total;
      this.cartCount = res.json().count;
      swal(res.json().message, "", "success");
    }, err => {

    })
  }
  getCart() {
    var inData = localStorage.getItem('userId');
    this.appService.getCart(inData).subscribe(res => {      
      this.cartDetails = res.json().cart_details;
      this.cartCount = res.json().count;
    }, err => {

    })
  }
  jewelData=[];
    jewelArr=[];
    jewlsku=[];
    getJewel(){
        this.appService.getJewel().subscribe(res=> {
            this.jewelData = res.json().data;
            for(var i =0;i<this.jewelData.length;i++){
                // this.prodName = this.dealData[i].product_name;
                for(var j=0;j<this.jewelData[i].sku_details.length;j++) {
                    this.jewelData[i].sku_details[j].product_name=this.jewelData[i].product_name;
                    this.jewlsku = this.jewelData[i].sku_details[j];
                    this.skuArr.push(this.jewlsku);
                }
              
            }
        })
    }
    clothData=[];
    clothsku=[];
    clothArr=[];
    getCloth(){
        this.appService.getCloth().subscribe(res=> {
            this.clothData = res.json().data;
            for(var i =0;i<this.clothData.length;i++){
                // this.prodName = this.dealData[i].product_name;
                for(var j=0;j<this.clothData[i].sku_details.length;j++) {
                    this.clothData[i].sku_details[j].product_name=this.clothData[i].product_name;
                    this.clothsku = this.clothData[i].sku_details[j];
                    this.skuArr.push(this.topsku);
                }
              
            }
        })
    }
    ecomProds=[];
    ecomsku=[];
    ecomArr=[];
  getEcom(){
    this.appService.ecomProducts().subscribe(res=> {
        this.ecomProds = res.json().products;
        for(var i =0;i<this.ecomProds.length;i++){
            // this.prodName = this.dealData[i].product_name;
            for(var j=0;j<this.ecomProds[i].sku_details.length;j++) {
                this.ecomProds[i].sku_details[j].product_name=this.ecomProds[i].product_name;
                this.ecomProds[i].sku_details[j].product_id=this.ecomProds[i].product_id;
                this.ecomsku = this.ecomProds[i].sku_details[j];
                this.skuArr.push(this.ecomsku);
            }
          
        }
    }) 
  }  
}
