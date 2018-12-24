const baseUrl = 'http://192.169.243.70:3000/v1/'

export const AppSettings = {
    registrationUrl: baseUrl + 'users/registration',
    loginUrl: baseUrl + 'vendors/login',
    changePwdUrl: baseUrl + 'users/changepassword',
    categoriesUrl: baseUrl + 'categories/',
    productUrl: baseUrl + 'products',
    loginDetailsbyEmail: baseUrl + 'vendors/',
    getWholeSellersUrl: baseUrl + 'wholesalers',
    updateProfile: baseUrl + 'vendors/update_profile',
    forgotPw: baseUrl + 'vendors/forgot_password',
}