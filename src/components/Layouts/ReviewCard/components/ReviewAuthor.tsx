import { Stack, Avatar, Typography } from "@mui/material";

import { ReviewAuthorT } from "interface/db/reviews.types";

interface ReviewAuthorElT {
  author: ReviewAuthorT;
}

const ReviewAuthor: React.FC<ReviewAuthorElT> = ({ author }) => {
  return (
    <Stack direction="row" gap="15px">
      <Avatar
        variant="square"
        sx={{
          width: "70px",
          height: "70px",
          borderRadius: "10px",
        }}
        src={author.avatar}
      />

      <Stack>
        <Typography fontWeight={600}>{author.username}</Typography>

        {author.createdAt && (
          <Typography fontSize={14} color="app_text.main">
            Join On 25-04-2022
          </Typography>
        )}

        <Typography fontSize={14} color="app_text.main">
          12:42 PM
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ReviewAuthor;
