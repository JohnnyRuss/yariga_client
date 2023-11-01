import React from "react";

interface PropertyViewMainT {
  src: string;
  onClick: () => void;
}

const PropertyViewMain: React.FC<PropertyViewMainT> = ({ onClick, src }) => {
  return (
    <figure
      onClick={onClick}
      style={{
        width: "70%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt="property"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </figure>
  );
};

export default PropertyViewMain;
