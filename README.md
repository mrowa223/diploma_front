
## Tech Stack
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Bootstrap](https://getbootstrap.com/)

<!-- -->
Seller
POST
/private/seller/profile/change
Change seller profile info

Jump to definition

POST
/private/registerSeller
Register seller account


GET
/private/seller/profile
Profile info

Jump to definition

GET
/private/seller/profile/loyalty
Loyalty of profile


Buyer
Buyer operations



POST
/private/buyer/profile/change
Change profile info

Jump to definition

GET
/private/buyer/profile
Profile info

Jump to definition

GET
/private/buyer/profile/loyalty
Loyalty of profile

Jump to definition

GET
/private/buyer/profile/CLV
CLV of profile

Jump to definition
Cart
Cart operations



POST
/private/buyer/cart/clear
Clear cart items

Jump to definition

POST
/private/buyer/cart/change
Change cart containtment

Jump to definition

POST
/private/buyer/cart/changeCart
Changes cart

Jump to definition

POST
/private/buyer/cart/add
Add product to cart

Jump to definition

GET
/private/buyer/cart/
Cart info

Jump to definition
Authentication
Forgot password endpoints for public



POST
/public/register
Register new user

Jump to definition

POST
/public/forgot/send

Jump to definition

POST
/public/forgot/check

Jump to definition

POST
/public/authenticate
Login and returns token

Jump to definition

POST
/private/profile
Register new user

Jump to definition

POST
/private/profile/changeTransparentPolicies
Agree many transparent policies

Order
Operations for buyers to order



POST
/private/buyer/order/create
Buyer creates order with their cart

GET
/private/buyer/order/{id}
Getting specifig of order


GET
/private/buyer/order/list
Getting list of orders