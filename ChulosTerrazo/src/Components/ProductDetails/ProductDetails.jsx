import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice/cartSlice";
import ImageGallery from "react-image-gallery"; // Importa ImageGallery
import "react-image-gallery/styles/css/image-gallery.css"; // Importa los estilos predeterminados
import {
  Discount,
  DiscountText,
  DetailsContainer,
  ProductFound,
  ContentFirst,
  BoxGalleryImg,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductDescription,
  StockInfo,
  AddToCartButton,
  BackLink,
  ButtonContainer,
  NotFoundMessage,
} from "./ProductDetailsStyles";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );
  const dispatch = useDispatch();

  const images = product?.img.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <DetailsContainer>
      {product ? (
        <ProductFound>
          <ProductName>{product.name}</ProductName>
          <ContentFirst>
            <BoxGalleryImg>
              <ImageGallery
                className="image-gallery-container"
                items={images}
                showPlayButton={false}
                showNav={true}
                showThumbnails={true}
              />
            </BoxGalleryImg>

            <ProductInfo>
              <ProductPrice>
                ${product.price.toLocaleString()}{" "}
                <s>${product.price + (product.price * 30) / 100}</s>
              </ProductPrice>
              <StockInfo>Stock disponible</StockInfo>
              <ProductDescription>{product.description}</ProductDescription>

              <ButtonContainer>
                <AddToCartButton onClick={handleAddToCart}>
                  Agregar a carrito
                </AddToCartButton>
                <BackLink to="/tienda">Volver tienda</BackLink>
              </ButtonContainer>
              <Discount>
                <DiscountText>
                  30% de descuento abonando por transferencia o en efectivo
                </DiscountText>
              </Discount>
            </ProductInfo>
          </ContentFirst>
        </ProductFound>
      ) : (
        <NotFoundMessage>
          <h2>Oops! Producto no encontrado.</h2>
          <span>😞</span>
          <p>Lo sentimos, no pudimos encontrar el producto que buscas.</p>
          <BackLink to="/tienda">Volver a la tienda</BackLink>
        </NotFoundMessage>
      )}
    </DetailsContainer>
  );
};

export default ProductDetails;
