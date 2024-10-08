import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import StoreProducts from "../Pages/StoreProducts/StoreProducts";
import Diseños from "../Pages/Diseños/Diseños";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";

export function Routes() {
  return (
    <ReactDomRoutes>
      <Route index path="/" element={<Home />} />
      <Route path="/tienda/*" element={<StoreProducts />} />
      <Route path="/disenos" element={<Diseños />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />

      {/* <Route path="/mis-ordenes" element={<MisOrdenes />} /> */}
      {/* <Route path="/checkout" element={<ProtectedRoute redirectTo="/register"><Checkout /></ProtectedRoute>} /> */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </ReactDomRoutes>
  );
}

export default Routes;
