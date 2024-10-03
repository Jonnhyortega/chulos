import React, { useState } from "react";
import {
  CardContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductButton,
} from "./CardProductStyles";

export default function CardProduct({ product }) {
  const [stringsToWatch, setStringsToWatch] = useState(10);
  const handleStrings = () => {
    stringsToWatch == 10 ? setStringsToWatch(length) : setStringsToWatch(10);
  };
  return (
    <CardContainer>
      <ProductImage src={product.img} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductDescription onClick={handleStrings}>
          {stringsToWatch == 10
            ? product.description.substring(0, 10) + "..."
            : product.description.substring(0, product.description.lenght) +
              "."}
        </ProductDescription>
        <ProductPrice>${product.price.toLocaleString()}</ProductPrice>
        <ProductButton>Agregar</ProductButton>
      </ProductInfo>
    </CardContainer>
  );
}
