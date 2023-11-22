interface ExtraDetailIconT {
  src: string;
}

const ExtraDetailIcon: React.FC<ExtraDetailIconT> = ({ src }) => {
  return (
    <svg width={20} height={20}>
      <image
        xlinkHref={src}
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    </svg>
  );
};

export default ExtraDetailIcon;
