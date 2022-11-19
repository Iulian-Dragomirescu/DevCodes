import React from "react";

import img from "../../../assets/images/pexels-rodnae-productions-7888768.webp";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Images() {
  return (
    <div className="relative w-full h-full grayscale justify-center flex items-center lg:justify-start lg:items-start">
      <div className="w-[80%] lg:w-[73%]">
        <LazyLoadImage
          className="rounded-md shadow-xl"
          src={img}
          alt="img"
          effect="blur"
        />
      </div>

      <span className="absolute w-[80%] lg:w-[73%] h-full animate-pulse bg-gray-700 z-[-10] rounded-md"></span>
    </div>
  );
}

export default Images;
