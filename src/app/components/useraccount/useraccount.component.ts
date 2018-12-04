import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UseraccountComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {
    this.page = this.route.snapshot.data[0]['page'];
    if (this.page === 'profile') {
      this.showProfile = true;
    } else if (this.page === 'wishlist') {
      this.showWishlist = true;
    } else if (this.page === 'orders') {
      this.showMyOrders = true;
    } else if (this.page === 'notifications') {
      this.showNotifications = true;
    }

  }

  ngOnInit() {
  }

  page;
  showNotifications = false;
  showOrderDetails = false;
  showMyOrders = false;
  showChangePassword = false;
  showWishlist = false;
  showAddAddress = false;
  showDeliveryAddress = false;
  editUserProfile = false;
  showProfile = false;

  profile() {
    this.showNotifications = false;
    this.showOrderDetails = false;
    this.showMyOrders = false;
    this.showChangePassword = false;
    this.showWishlist = false;
    this.showAddAddress = false;
    this.showDeliveryAddress = false;
    this.editUserProfile = false;
    this.showProfile = true;
  }

  editProfile() {
    this.showNotifications = false;
    this.showOrderDetails = false;
    this.showMyOrders = false;
    this.showChangePassword = false;
    this.showWishlist = false;
    this.showAddAddress = false;
    this.showDeliveryAddress = false;
    this.editUserProfile = true;
    this.showProfile = false;
  }

  deliveryAddress() {
    this.showNotifications = false;
    this.showOrderDetails = false;
    this.showMyOrders = false;
    this.showChangePassword = false;
    this.showWishlist = false;
    this.showAddAddress = false;
    this.showDeliveryAddress = true;
    this.editUserProfile = false;
    this.showProfile = false;
  }
  addAddress() {
    this.showNotifications = false;
    this.showOrderDetails = false;
    this.showMyOrders = false;
    this.showChangePassword = false;
    this.showWishlist = false;
    this.showAddAddress = true;
    this.showDeliveryAddress = false;
    this.editUserProfile = false;
    this.showProfile = false;
  }

  wishList() {
    this.showNotifications = false;
    this.showOrderDetails = false;
    this.showMyOrders = false;
    this.showChangePassword = false;
    this.showWishlist = true;
    this.showAddAddress = false;
    this.showDeliveryAddress = false;
    this.editUserProfile = false;
    this.showProfile = false;
  }

  changePassword() {
    this.showNotifications = false;
    this.showOrderDetails = false;
    this.showMyOrders = false;
    this.showChangePassword = true;
    this.showWishlist = false;
    this.showAddAddress = false;
    this.showDeliveryAddress = false;
    this.editUserProfile = false;
    this.showProfile = false;
  }

  myOrder() {
    this.showNotifications = false;
    this.showOrderDetails = false;
    this.showMyOrders = true;
    this.showChangePassword = false;
    this.showWishlist = false;
    this.showAddAddress = false;
    this.showDeliveryAddress = false;
    this.editUserProfile = false;
    this.showProfile = false;
  }

  notifications() {
    this.showNotifications = true;
    this.showOrderDetails = false;
    this.showMyOrders = false;
    this.showChangePassword = false;
    this.showWishlist = false;
    this.showAddAddress = false;
    this.showDeliveryAddress = false;
    this.editUserProfile = false;
    this.showProfile = false;
  }

  showBukedOrderDetails() {
    this.showNotifications = false;
    this.showOrderDetails = true;
    this.showMyOrders = false;
    this.showChangePassword = false;
    this.showWishlist = false;
    this.showAddAddress = false;
    this.showDeliveryAddress = false;
    this.editUserProfile = false;
    this.showProfile = false;
  }

}
