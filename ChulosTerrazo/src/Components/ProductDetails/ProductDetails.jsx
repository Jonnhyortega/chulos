import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice/cartSlice";
import {
  DetailsContainer,
  ProductImageContainer,
  ThumbnailContainer,
  ThumbnailImage,
  ProductImage,
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
  const [mainImage, setMainImage] = useState(product?.img[0] || "");
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    console.log("Producto agregado al carrito");
  };

  return (
    <DetailsContainer>
      {product ? (
        <>
          <ProductImageContainer>
            <ProductImage src={mainImage} alt={product.name} />
            <ThumbnailContainer>
              {product.img.map((image, index) => (
                <ThumbnailImage
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </ThumbnailContainer>
          </ProductImageContainer>

          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price.toLocaleString()} <s>${product.price + ((product.price*30)/100)}</s></ProductPrice>
            <StockInfo>Stock disponible</StockInfo>
            <ProductDescription>{product.description}</ProductDescription>

            <ButtonContainer>
              <AddToCartButton onClick={handleAddToCart}>
                Agregar al carrito
              </AddToCartButton>
              <BackLink to="/tienda">Volver a la tienda</BackLink>
            </ButtonContainer>
          </ProductInfo>
        </>
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
