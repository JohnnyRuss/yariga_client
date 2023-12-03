interface PropertyViewThumbT {
  src: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const PropertyViewThumb: React.FC<PropertyViewThumbT> = ({
  src,
  onClick,
  children,
}) => {
  return (
    <figure
      onClick={onClick}
      style={{
        flex: 1,
        width: "100%",
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {children}
      <img
        src={src}
        title={src}
        width="100%"
        height="100%"
        loading="eager"
        alt="property thumbnail"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </figure>
  );
};

export default PropertyViewThumb;
