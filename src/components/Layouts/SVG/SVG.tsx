import React from "react";

interface SVGT {
  width?: number | string;
  height?: number | string;
  src: string;
}

const SVG: React.FC<SVGT> = ({ src, width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height}>
      <image xlinkHref={src} />
    </svg>
  );
};

export default SVG;
