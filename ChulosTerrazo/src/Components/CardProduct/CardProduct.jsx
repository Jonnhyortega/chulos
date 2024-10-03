// src/components/CardProduct.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice/cartSlice";
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
  const dispatch = useDispatch();
  const handleStrings = () => {
    stringsToWatch === 10
      ? setStringsToWatch(product.description.length)
      : setStringsToWatch(10);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <CardContainer>
      <ProductImage src={product.img} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductDescription onClick={handleStrings}>
          {stringsToWatch === 10
            ? product.description.substring(0, 10) + "..."
            : product.description}
        </ProductDescription>
        <ProductPrice>${product.price.toLocaleString()}</ProductPrice>
        <ProductButton onClick={handleAddToCart}>Agregar</ProductButton>{" "}
        {/* Botón que llama a la función de agregar */}
      </ProductInfo>
    </CardContainer>
  );
}
