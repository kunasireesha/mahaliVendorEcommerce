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
    constructor(private router: Router, public productService: ProductService, private appService: appService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
            if (params.action === "search") {
                this.product = params.product;
                this.search(this.product);
                this.seeAll = false;
                this.searchProd = true;
            }
            if (params.action === "deals") {
                this.type = params.action;
                this.dealOfDay();
                this.seeAll = true;
                this.searchProd = false;
            } else if (params.action === "typeProd") {
                this.type = params.action;
                this.dealOfDay();
                this.seeAll = true;
                this.searchProd = false;
            } else if (params.action === "cloth") {
                this.type = params.action;
                this.getCloth();
                this.seeAll = true;
                this.searchProd = false;
            } else if (params.action === "jewel") {
                this.type = params.action;
                this.getJewel();
                this.seeAll = true;
                this.searchProd = false;
            } else if (params.action === "recent") {
                this.type = params.action;
                this.getEcom();
                this.seeAll = true;
                this.searchProd = false;
            } else if (params.action === 'category') {
                this.catId = params.catId;
                this.catName = params.catName;
                this.seeAll = true;
                this.searchProd = false;
                this.getCatProducts('');
            } else if (params.action === 'subCategory') {
                this.subId = params.subId;
                this.catName = params.catName;
                this.subCatName = params.subCat;
                this.seeAll = true;
                this.searchProd = false;
                this.getSubProducts('');
            }

        })
    }
    catId;
    catName;
    subCatName;
    ngOnInit() {
        this.getCategories();
    }
    showCategories = false;

    collapse() {
        this.showCategories = !this.showCategories;

    }
    showProduxtDetails(prodId) {
        this.router.navigate(['/productdetails'], { queryParams: { prodId: prodId } });
    }
    category = [];
    subCatData = [];
    subId;
    serProducts = [];
    seeAll = false;
    searchProd = false;
    search(product) {
        this.searchProd = true;
        this.appService.searchProducts(product).subscribe(res => {
            this.serProducts = res.json().data;
        }, err => {

        })
    }
    dealData = [];
    topOfrs = [];
    skuData = [];
    skuArr = [];
    topsku = [];
    topArr = [];
    ecomProds = [];
    ecomsku = [];
    ecomArr = [];
    jewelData = [];
    jewelArr = [];
    jewlsku = [];
    cartDetails = [];
    cartCount;
    noData;
    dealOfDay() {
        this.skuArr = [];
        this.appService.dealOfDay().subscribe(res => {
            this.dealData = res.json().data.deals_of_the_day;
            this.topOfrs = res.json().data.top_offers;
            if (this.type === "deals") {
                for (var i = 0; i < this.dealData.length; i++) {
                    // this.prodName = this.dealData[i].product_name;
                    for (var j = 0; j < this.dealData[i].sku_details.length; j++) {
                        this.dealData[i].sku_details[j].product_name = this.dealData[i].product_name;
                        this.skuData = this.dealData[i].sku_details[j];
                        this.skuArr.push(this.skuData);
                    }

                }
            } else if (this.type === "typeProd") {
                for (var i = 0; i < this.topOfrs.length; i++) {
                    // this.prodName = this.dealData[i].product_name;
                    for (var j = 0; j < this.topOfrs[i].sku_details.length; j++) {
                        this.topOfrs[i].sku_details[j].product_name = this.topOfrs[i].product_name;
                        this.topsku = this.dealData[i].sku_details[j];
                        this.skuArr.push(this.topsku);
                    }

                }
            }


        })
    }

    addtoCart(Id, skId) {
        var inData = {
            "products": [{
                product_id: Id,
                sku_id: skId
            }],
            "vendor_id": JSON.parse(localStorage.getItem('userId')),
            "item_type": "ecommerce"
        }
        this.appService.addtoCart(inData).subscribe(res => {
            this.getCart();
            this.cartDetails = res.json().selling_price_total;
            this.cartCount = res.json().count;
            // swal(res.json().message, "", "success");
            swal("Success", "", "success");
        }, err => {

        })
    }
    billing;
    getCart() {
        var inData = localStorage.getItem('userId');
        this.appService.getCart(inData).subscribe(res => {
            this.cartDetails = res.json().cart_details;
            this.cartCount = res.json().count;
            this.billing = res.json().selling_Price_bill;
        }, err => {

        })
    }

    getJewel() {
        this.skuArr = [];
        this.appService.getJewel().subscribe(res => {
            this.jewelData = res.json().data;
            for (var i = 0; i < this.jewelData.length; i++) {
                // this.prodName = this.dealData[i].product_name;
                for (var j = 0; j < this.jewelData[i].sku_details.length; j++) {
                    this.jewelData[i].sku_details[j].product_name = this.jewelData[i].product_name;
                    this.jewlsku = this.jewelData[i].sku_details[j];
                    this.skuArr.push(this.jewlsku);
                }

            }
        })
    }
    clothData = [];
    clothsku = [];
    clothArr = [];
    getCloth() {
        this.skuArr = [];
        this.appService.getCloth().subscribe(res => {
            this.clothData = res.json().data;
            for (var i = 0; i < this.clothData.length; i++) {
                // this.prodName = this.dealData[i].product_name;
                for (var j = 0; j < this.clothData[i].sku_details.length; j++) {
                    this.clothData[i].sku_details[j].product_name = this.clothData[i].product_name;
                    this.clothsku = this.clothData[i].sku_details[j];
                    this.skuArr.push(this.clothsku);
                }

            }
        })
    }

    getEcom() {
        this.skuArr = [];
        this.appService.ecomProducts().subscribe(res => {
            this.ecomProds = res.json().products;
            for (var i = 0; i < this.ecomProds.length; i++) {
                // this.prodName = this.dealData[i].product_name;
                for (var j = 0; j < this.ecomProds[i].sku_details.length; j++) {
                    this.ecomProds[i].sku_details[j].product_name = this.ecomProds[i].product_name;
                    this.ecomProds[i].sku_details[j].product_id = this.ecomProds[i].product_id;
                    this.ecomsku = this.ecomProds[i].sku_details[j];
                    this.skuArr.push(this.ecomsku);
                }

            }
        })
    }
    selectedCat;
    subCategory = [];
    showsubCat(index, id) {
        this.subCategory = [];
        this.selectedCat = index;
        this.showCategories = true;

        for (var i = 0; i < this.subCatData.length; i++) {
            if (id === this.subCatData[i].category_id) {
                this.subCategory.push(this.subCatData[i]);
            }
        }
    }

    closesubSubCat() {
        this.showCategories = false;
        // this.showSubCategories = false;
    }

    prodData = [];

    getCategories() {
        this.subCatData = [];
        this.appService.getCategories().subscribe(resp => {
            this.category = resp.json().categories;
            // this.showSubCat(this.subId);
            for (var i = 0; i < this.prodData.length; i++) {
                for (var j = 0; j < this.prodData[i].sku_row.length; j++) {
                    this.prodData[i].sku_row[j].product_name = this.prodData[i].product_name;
                    this.skuData.push(this.prodData[i].sku_row[j]);
                }
            }
        })
    }

    getSubProducts(subid) {
        this.skuData = [];
        this.subId = (subid === '') ? this.subId : subid;
        this.skuArr = [];
        this.appService.productBySubCatId(this.subId).subscribe(res => {
            this.prodData = res.json().products;
            this.skuData = [];
            for (var i = 0; i < this.prodData.length; i++) {
                for (var j = 0; j < this.prodData[i].sku_row.length; j++) {
                    this.prodData[i].sku_row[j].product_name = this.prodData[i].product_name;
                    this.skuData.push(this.prodData[i].sku_row[j]);
                }
            }
            if (res.json().message === "No records Found") {
                this.noData = true;
            }
        }, err => {

        })
    }
    getCatProducts(id) {
        this.skuData = [];
        this.catId = (id === '') ? this.catId : id;
        this.skuArr = [];
        this.appService.productByCatId(this.catId).subscribe(res => {
            this.prodData = res.json().products;
            for (var i = 0; i < this.prodData.length; i++) {
                for (var j = 0; j < this.prodData[i].sku_row.length; j++) {
                    this.prodData[i].sku_row[j].product_name = this.prodData[i].product_name;
                    this.skuData.push(this.prodData[i].sku_row[j]);
                }
            }
            if (res.json().message === "No records Found") {
                this.noData = true;
            }


        }, err => {

        })
    }
}
