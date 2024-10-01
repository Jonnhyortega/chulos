import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import StoreProducts from "../Pages/StoreProducts/StoreProducts"; 

export function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/tienda/*" element={<StoreProducts />} /> 
      
      {/* <Route path="/mis-ordenes" element={<MisOrdenes />} /> */}
      {/* <Route path="/checkout" element={<ProtectedRoute redirectTo="/register"><Checkout /></ProtectedRoute>} /> */}
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </ReactDomRoutes>
  );
}

export default Routes;
