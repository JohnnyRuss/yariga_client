import React from "react";

interface SVGT {
  width?: number | string;
  height?: number | string;
  color?: string;
  src: string;
}

const SVG: React.FC<SVGT> = ({ src, width = 24, height = 24, color }) => {
  return (
    <svg width={width} height={height} stroke="#2edd34">
      <image
        xlinkHref={src}
        style={{
          maxWidth: "100%",
          height: "100%",
          objectFit: "contain",
          stroke: "#2edd34",
          fill: "#2edd34",
          color: "#2edd34",
          // color: color ? color : "inherit",
        }}
      />
    </svg>
  );
};

export default SVG;
