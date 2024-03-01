import React from "react";
import Typist from 'react-typist';

const Gallry = () => {
  return (
    <div>
      <Typist>
        <h1>Gallery</h1>
      </Typist>
      <div className="gallery"></div>
    </div>
  );
};

export default Gallry;

// component to show the gallery grid
export const ShowGalleryGrid = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img src={image} alt={`image-${index}`} key={index} />
      ))}
    </div>
  );
};