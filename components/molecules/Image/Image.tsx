import React from "react";

type Props = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: Props) => {
  return (
    <picture>
      <source type="image/webp" src={src} />
      <img src={src} alt={alt} />
    </picture>
  );
};

export default Image;
