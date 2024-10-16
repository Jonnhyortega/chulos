import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import StoreProducts from "../Pages/StoreProducts/StoreProducts";
import Diseños from "../Pages/Diseños/Diseños";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import ThankYouPage from "../Pages/ThankYouPage/ThankYouPage";
export function Routes() {
  return (
    <ReactDomRoutes>
      <Route index path="/" element={<Home />} />
      <Route path="/disenos" element={<Diseños />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tienda/*" element={<StoreProducts />} />
      <Route path="/thankyou" element={<ThankYouPage />} />
      <Route path="/tienda/product/:id" element={<ProductDetails />} /> 
    </ReactDomRoutes>
  );
}

export default Routes;
