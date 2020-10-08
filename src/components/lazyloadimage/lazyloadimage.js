import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LazyLoadImages = ({ src, alt, className, i }) => (
    <LazyLoadImage
      alt={alt}
      src={src}
      key={i}
      className={className}
      effect="blur"
    />
);

export default LazyLoadImages;
