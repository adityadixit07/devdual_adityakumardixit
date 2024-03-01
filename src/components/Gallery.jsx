import React, { useState } from "react";
// fine arts
import img_ from "../assets/finearts/img_.jpg";
import img_1 from "../assets/finearts/img_1.jpg";
import img_2 from "../assets/finearts/img_2.jpg";
import img_3 from "../assets/finearts/img_3.jpg";
// rudrabhishek images
import img1 from "../assets/rudrabhishek/img1.jpg";
import img2 from "../assets/rudrabhishek/img2.jpg";
import img3 from "../assets/rudrabhishek/img3.jpg";
import img4 from "../assets/rudrabhishek/img4.jpg";
import img5 from "../assets/rudrabhishek/img5.jpg";
// flower show
import fl1 from "../assets/flowershow/fl1.jpg";
import fl2 from "../assets/flowershow/fl2.jpg";
import fl3 from "../assets/flowershow/fl3.jpg";
import fl4 from "../assets/flowershow/fl4.jpg";
import Button from "./Button";
import { motion } from "framer-motion";

const Gallery = () => {
  const finearts = [img_, img_1, img_2, img_3];
  const rudrabhishek = [img1, img2, img3, img4, img5];
  const flowershow = [fl1, fl2, fl3, fl4];

  const [gallery, setGallery] = useState("finearts");
  const handleGallery = (gallery) => {
    setGallery(gallery);
    console.log(gallery);
  };

  return (
    <div className="mt-8">
      <div className="gallery pb-5 text-center">
        <h1 className="text-gray-600 text-center font-semibold text-2xl border-b-4 inline-flex border-gray-400">
          Some of our Proud Moments
        </h1>
      </div>

      <div className=" flex items-center justify-center gap-4 pb-4">
        <Button text={"Fine Arts"} action={() => handleGallery("finearts")} />
        <Button
          text={"Rudra-bhisehk 🕉"}
          action={() => handleGallery("rudrabhishek")}
        />
        <Button
          text={"Flower Show"}
          action={() => handleGallery("flowershow")}
        />
      </div>
      <div>
        {gallery === "finearts" && (
          <div>
            <h1 className="ml-[2rem] pb-2 text-2xl font-medium">Fine Arts</h1>
            <ShowGalleryGrid images={finearts} />
          </div>
        )}
      </div>
      <div>
        {gallery === "rudrabhishek" && (
          <div>
            <h1 className="ml-[2rem] pb-2 text-2xl font-medium">
              Rudra-abhishek Arts
            </h1>
            <ShowGalleryGrid images={rudrabhishek} />
          </div>
        )}
      </div>
      <div>
        {gallery === "flowershow" && (
          <div>
            <h1 className="ml-[2rem] pb-2 text-2xl font-medium">Flower Show</h1>
            <ShowGalleryGrid images={flowershow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;

// compoent to show that gallery grid
export const ShowGalleryGrid = ({ images }) => {
  return (
    <motion.div
      initial={{ y: "-40vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 20 }}
      className="grid grid-cols-3 gap-4 mx-6"
    >
      {images.map((image, index) => (
        <img
          src={image}
          alt={`image-${index}`}
          key={index}
          className="rounded-xl object-contain border-4 border-red-400"
        />
      ))}
    </motion.div>
  );
};
