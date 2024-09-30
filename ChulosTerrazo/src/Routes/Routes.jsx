import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";

export function Routes() {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/mis-ordenes" element={<MisOrdenes />} /> */}

      {/* <Route path="/checkout" element={
        <ProtectedRoute redirectTo="/register">
            <Checkout />
        </ProtectedRoute>
      } />

      <Route path="*" element={<PageNotFound />} /> */}
    </ReactDomRoutes>
  );
}
export default Routes;
