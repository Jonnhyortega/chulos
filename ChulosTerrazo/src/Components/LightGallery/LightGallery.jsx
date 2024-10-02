import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";


export function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  

  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href={img}>
          <img
            alt="img1"
            src={img}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>
      
        <a href={img2}>
          <img
            alt="img2"
            src={img2}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>
        <a href={img3}>
          <img
            alt="img2"
            src={img3}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>
        <a href={img4}>
          <img
            alt="img2"
            src={img4}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>
        <a href={img5}>
          <img
            alt="img2"
            src={img5}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>
        <a href={img6}>
          <img
            alt="img2"
            src={img6}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>
        <a href={img7}>
          <img
            alt="img2"
            src={img7}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>
        <a href={img8}>
          <img
            alt="img2"
            src={img8}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>
        <a href={img9}>
          <img
            alt="img2"
            src={img9}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        </a>

      </LightGallery>
    </div>
  );
}

export default Gallery;
