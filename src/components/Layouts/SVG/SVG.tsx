interface SVGT {
  width?: number | string;
  height?: number | string;
  src: string;
}

const SVG: React.FC<SVGT> = ({ src, width = 24, height = 24 }) => {
  return (
    <svg width={width} height={height}>
      <image
        xlinkHref={src}
        style={{
          maxWidth: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </svg>
  );
};

export default SVG;
