import SingleImage from "./Assets/SingleImage";
import DualImage from "./Assets/DualImage";
import MultipleImages from "./Assets/MultipleImages";
import * as MuiStyled from "./Message.styled";

type ImagesT = {
  images: Array<string>;
  belongToActiveUser: boolean;
};

const Images: React.FC<ImagesT> = ({ images, belongToActiveUser }) => {
  const imagesLength = images.length;

  return (
    <MuiStyled.ImageGrid
      container
      spacing={1}
      belongs_to_active_user={belongToActiveUser ? "1" : "0"}
    >
      {imagesLength === 1 ? (
        <SingleImage image={images[0]} />
      ) : imagesLength === 2 ? (
        <DualImage images={images} />
      ) : (
        <MultipleImages images={images} />
      )}
    </MuiStyled.ImageGrid>
  );
};

export default Images;
