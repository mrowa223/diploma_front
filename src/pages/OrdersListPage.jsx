import React from "react";
import {
  Navbar,
  Main,
  Product,
  Footer,
  // WishListPage,
  OrdersList,
  UpdPageProfile,
} from "../components";
const OrdersListPage = () => {
  return (
    <>
      <Navbar />
      <OrdersList />
      <Footer />
    </>
  );
};

export default OrdersListPage;
