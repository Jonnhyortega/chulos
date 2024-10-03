import React from "react";
import { useSelector } from "react-redux";
import { ProductsContainer } from "./ContainerProductsStyles";
import CardProduct from "../CardProduct/CardProduct";

export function ContainerProducts() {
  const products = useSelector((state) => state.products.products);

  return (
    <ProductsContainer>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </ProductsContainer>
  );
}
export default ContainerProducts;
