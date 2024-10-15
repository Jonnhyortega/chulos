import React, { useState } from 'react';
import { ModalContainer, ModalContent, CloseButton, ArrowButton, SliderImage } from './ProductModalStyles';

const ProductModal = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  if (!product) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <SliderImage src={product.img[currentImageIndex]} alt={product.name} />
        <div>
          <ArrowButton onClick={handlePrevImage}>{"<"}</ArrowButton>
          <ArrowButton onClick={handleNextImage}>{">"}</ArrowButton>
        </div>
        {/* <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price.toLocaleString()}</p> */}
      </ModalContent>
    </ModalContainer>
  );
};

export default ProductModal;
