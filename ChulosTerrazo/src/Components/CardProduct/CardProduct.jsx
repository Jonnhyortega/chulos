import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice/cartSlice";
import {
  CardContainer,
  StyledLink,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductButton,
  SliderButton,
  SlidersBox,
} from "./CardProductStyles";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function CardProduct({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.img.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.img.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <CardContainer>
        <StyledLink to={`/tienda/product/${product.id}`}>
          <ProductImage
            onClick={handleOpenModal}
            src={product.img[currentImageIndex]}
            alt={product.name}
          />
        </StyledLink>
        <SlidersBox>
          <SliderButton onClick={handlePrevImage}>
            <MdArrowBackIos />
          </SliderButton>
          <SliderButton onClick={handleNextImage}>
            <MdArrowForwardIos />
          </SliderButton>
        </SlidersBox>
        <ProductInfo>
          <StyledLink to={`/tienda/product/${product.id}`}>
            <ProductName>{product.name}</ProductName>
          </StyledLink>
          <StyledLink to={`/tienda/product/${product.id}`}>
            Ver producto
          </StyledLink>
          <ProductPrice>${product.price.toLocaleString()}</ProductPrice>
          <ProductButton onClick={handleAddToCart}>Agregar</ProductButton>
        </ProductInfo>
      </CardContainer>
    </>
  );
}
