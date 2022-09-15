import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import "../assets/scss/components/appImage.scss";

export const AppImage = ({ src, alt, width, height, ...rest }) => {
  return (
    <>
      <div className="appImage" {...rest}>
        <LazyLoadImage
          alt={alt}
          height={height}
          src={src}
          width={width}
          effect="blur"
        />
      </div>
    </>
  );
};
