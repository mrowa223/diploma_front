import React from "react";
import ReactDOM from "react-dom/client";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./redux/store";

import {
  Navbar,
  Main,
  Product,
  Footer,
  WishListPage,
  OrdersListPage,
  UpdPageProfile,
} from "../components";
const ProfilePage = () => {
  return (
    <>
      <Navbar />
      <UpdPageProfile />
      <Footer />
    </>
  );
};

export default ProfilePage;
