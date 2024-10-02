import React, { useEffect, useState } from "react";
import {
  DiseñosWrapper,
  Gallery,
  ImageCard,
  Image,
  Overlay,
  OverlayImage,
  CloseButton,
  ArrowButton,
} from "./DiseñosStyles";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillApi,
} from "react-icons/ai";
import img1 from "../../imgs/Divisores/DivisoresImg1.jpg";
import img2 from "../../imgs/Divisores/DivisoresImg2.jpg";
import img3 from "../../imgs/Divisores/DivisoresImg3.jpg";
import img4 from "../../imgs/Divisores/DivisoresImg4.jpg";
import img5 from "../../imgs/Divisores/DivisoresImg5.jpg";
import img6 from "../../imgs/Divisores/DivisoresImg6.jpg";
import img7 from "../../imgs/Divisores/DivisoresImg7.jpg";
import img8 from "../../imgs/Divisores/DivisoresImg8.jpg";
import img9 from "../../imgs/Divisores/DivisoresImg9.jpg";

export default function Diseños() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openOverlay = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          closeOverlay();
          break;
        case "ArrowRight":
          goToNextImage();
          break;
        case "ArrowLeft":
          goToPrevImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeOverlay();
    }
  };

  return (
    <DiseñosWrapper>
      <h2>Divisores de Madera</h2>
      <Gallery>
        {images.map((img, index) => (
          <ImageCard key={index} onClick={() => openOverlay(index)}>
            <Image src={img} alt={`Divisor ${index + 1}`} />
          </ImageCard>
        ))}
      </Gallery>

      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <CloseButton onClick={closeOverlay}>
            <AiFillApi />
          </CloseButton>
          <ArrowButton left onClick={goToPrevImage}>
            <AiOutlineArrowLeft />
          </ArrowButton>
          <OverlayImage
            src={images[currentIndex]}
            alt={`Divisor ${currentIndex + 1}`}
          />
          <ArrowButton right onClick={goToNextImage}>
            <AiOutlineArrowRight />
          </ArrowButton>
        </Overlay>
      )}
    </DiseñosWrapper>
  );
}
