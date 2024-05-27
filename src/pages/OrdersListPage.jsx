import React from "react";
import {
  Navbar,
  Main,
  Product,
  Footer,
  // WishListPage,

} from "../commons";

import { OrdersList } from "../components/";
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
