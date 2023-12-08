import { nanoid } from "@reduxjs/toolkit";
import { Grid, Skeleton } from "@mui/material";

const ImagesListSkeleton: React.FC = () => {
  return (
    <>
      {Array.from(new Array(12)).map((item) => (
        <Grid item xs={4} key={nanoid()}>
          <Skeleton
            variant="rounded"
            width="100%"
            height="100%"
            sx={{ aspectRatio: "1/1" }}
          />
        </Grid>
      ))}
    </>
  );
};

export default ImagesListSkeleton;
