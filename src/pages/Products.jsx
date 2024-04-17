import React from 'react'
import { Footer, Navbar, Product } from "../components"
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
const Products = () => {

  console.log(``)
  return (
    <>
      <Navbar />
    
      <Product />
      <Footer />
    </>
  )
}

export default Products