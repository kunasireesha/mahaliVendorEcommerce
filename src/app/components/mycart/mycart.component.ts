import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.less']
})
export class MycartComponent implements OnInit {
  showCartItems = true;
  showDeliveryAddress = false;
  showAddresses = true;
  showPaymentMethode = false;
  constructor() { }

  ngOnInit() {
  }
  showCart() {
    this.showCartItems = !this.showCartItems;
    this.showDeliveryAddress = false;
    this.showPaymentMethode = false;
  }

  //show addrss
  showAddress() {
    this.showCartItems = false;
    this.showDeliveryAddress = !this.showDeliveryAddress;
    this.showPaymentMethode = false;
  }

  //add address
  addAddress() {
    this.showAddresses = false;
  }

  //save address
  saveAddress() {
    this.showAddresses = true;

  }

  //showPayment
  showPayment() {
    this.showPaymentMethode = !this.showPaymentMethode;
    this.showCartItems = false;
    this.showAddresses = false;
  }

}
