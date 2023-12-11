import { nanoid } from "@reduxjs/toolkit";
import Linkify from "react-linkify";

import { matchEmoticons } from "utils";

import { Stack, Typography } from "@mui/material";

interface TextT {
  text: string;
  gap?: number | string;
  showEmotions?: boolean;
}

const Text: React.FC<TextT> = ({ text, gap = 1, showEmotions = true }) => {
  return (
    <Stack gap={gap}>
      {text.split("\n").map((paragraph) => (
        <Typography key={nanoid()} sx={{ wordBreak: "break-all" }}>
          <Linkify
            componentDecorator={(href) => (
              <a
                href={href}
                rel="noreferrer"
                target="_blank"
                className="underline"
                key={nanoid()}
              >
                {href}
              </a>
            )}
          >
            {showEmotions ? matchEmoticons(paragraph) : paragraph}
          </Linkify>
        </Typography>
      ))}
    </Stack>
  );
};

export default Text;
