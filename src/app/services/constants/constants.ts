const baseUrl = 'http://192.169.243.70:3000/v1/'

export const AppSettings = {
    registrationUrl: baseUrl + 'vendors/registration',
    loginUrl: baseUrl + 'vendors/login',
    changePwdUrl: baseUrl + 'vendors/changepassword',
    categoriesUrl: baseUrl + 'ecommerce/categories',
    productUrl: baseUrl + 'products',
    loginDetailsbyEmail: baseUrl + 'vendors/',
    getWholeSellersUrl: baseUrl + 'wholesalers',
    updateProfile: baseUrl + 'vendors/update_profile',
    forgotPw: baseUrl + 'vendors/forgot_password',
    addaddress:baseUrl+"delivery_address",
    getAddress:baseUrl+"delivery_address",
    delAddress:baseUrl+"delivery_address",
    businessDetails:baseUrl+"vendors/update_profile",
    taxDetails:baseUrl+"vendors/update_profile",
    bankDetails:baseUrl+"vendors/update_profile",
    getBanners:baseUrl+"banners/e_commerce",
    productByCatId:baseUrl+"products/category",
    productBySubCatId:baseUrl+"products/sub_category_id",
    searchProducts:baseUrl+'products/search',
    addToCart: baseUrl + "vendor/cart_details",
    getCart: baseUrl + 'vendor/cart_details/ecommerce',
    delCart:baseUrl+'vendor/cart_details',
    paymentType:baseUrl+"payment_options",
    palceOrder:baseUrl+"place_order",
    orderSummary:baseUrl+"place_order/order_summary", 
    getAccDetails:baseUrl+"vendors/account_details",
    updateAcc:baseUrl+"vendors/update_profile",
    dealOfDay:baseUrl+"products/e_commerce/dashboard",
    getJewel:baseUrl+"products/jewellery",
    getCloth:baseUrl+"products/cloths",
    ProductById:baseUrl+"products/product_id",
    ecomProducts:baseUrl+"products/e_commerce",
    getPlaceOrd:baseUrl+"place_order/vendor_orders/ecommerce/vendor_id",
    reqProducts:baseUrl+"place_order/request_products/vendor",
}

