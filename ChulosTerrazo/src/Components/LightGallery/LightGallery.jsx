import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import img7 from "../../imgs/img-gallery7.jpeg";
import img6 from "../../imgs/img-gallery6.jpeg";
import img5 from "../../imgs/img-gallery5.jpeg";
import img4 from "../../imgs/img-gallery4.jpeg";
import img3 from "../../imgs/img-gallery3.jpeg";
import img2 from "../../imgs/img-gallery2.jpeg";
import img from "../../imgs/img-gallery.jpeg";

export function Gallery() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  

  return (
    <div className="App">
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        <a href={img7}>
          <img
            alt="img1"
            src={img7}
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
            src={img5}
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

      </LightGallery>
    </div>
  );
}

export default Gallery;
