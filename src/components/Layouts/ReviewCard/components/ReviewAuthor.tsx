import { Link } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";

import { Avatar } from "components/Layouts";
import { Stack, Typography } from "@mui/material";

import { ReviewAuthorT } from "interface/db/reviews.types";

interface ReviewAuthorElT {
  author: ReviewAuthorT;
}

const ReviewAuthor: React.FC<ReviewAuthorElT> = ({ author }) => {
  return (
    <Stack direction="row" gap="15px">
      <Avatar
        width={{ xs: "50px", md: "70px" }}
        variant="rounded"
        src={author.avatar}
        alt={author.username}
      />

      <Stack>
        <Link
          to={
            author.role === "USER"
              ? DYNAMIC_PATHS.user_profile_page(author._id)
              : DYNAMIC_PATHS.agent_page(author._id)
          }
        >
          <Typography
            fontWeight={600}
            textTransform="capitalize"
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            {author.username}
          </Typography>
        </Link>

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
