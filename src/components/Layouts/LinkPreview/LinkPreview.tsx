import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

import { Box, Stack } from "@mui/material";
import { LineClamp } from "components/Layouts";
import LinkPreviewSkeleton from "./LinkPreviewSkeleton";

import { LinkMetaT } from "interface/db/utils.types";

type LinkPreviewT = {
  url: string;
  autoFetch?: boolean;
};

const LinkPreview: React.FC<LinkPreviewT> = ({ url }) => {
  const [loading, setLoading] = useState(true);

  const [meta, setMeta] = useState<LinkMetaT>({
    url: null,
    date: null,
    logo: null,
    image: null,
    title: null,
    author: null,
    publisher: null,
    description: null,
  });

  useEffect(() => {
    if (!url) return;

    async function getMeta() {
      try {
        setLoading(true);

        const { data }: AxiosResponse<LinkMetaT> = await axios.post(
          "http://localhost:4000/api/v1/utils/meta",
          { url }
        );

        setMeta((prev) => ({
          ...prev,
          ...data,
        }));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getMeta();
  }, [url]);

  return loading ? (
    <LinkPreviewSkeleton />
  ) : (
    <a href={url} target="_blank" rel="noreferrer">
      <Stack
        width="100%"
        bgcolor="app_bg.main"
        color="app_text.dark"
        borderRadius="10px"
        overflow="hidden"
        mt="5px"
      >
        <Box p={1}>
          <LineClamp
            clamp={1}
            title={meta.url || ""}
            sx={{
              fontSize: 12,
              color: "app_text.main",
              textDecoration: "underline",
            }}
          >
            {meta.url}
          </LineClamp>
        </Box>

        <Box component="figure" width="100%" sx={{ aspectRatio: "16/9" }}>
          <img
            src={meta.image || ""}
            alt={meta.title || ""}
            width="100%"
            height="100%"
            loading="lazy"
            title={meta.title || "link preview"}
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />
        </Box>

        <Box p={1}>
          <LineClamp
            clamp={2}
            sx={{ fontWeight: 600 }}
            title={meta.title || ""}
          >
            {meta.title}
          </LineClamp>

          {meta.author && (
            <LineClamp clamp={1} sx={{ fontSize: 12 }}>
              Author:&nbsp;{meta.author}
            </LineClamp>
          )}

          {meta.publisher && (
            <LineClamp clamp={1} sx={{ fontSize: 12 }}>
              Publisher:&nbsp;{meta.publisher}
            </LineClamp>
          )}

          <LineClamp
            clamp={2}
            title={meta.description || ""}
            sx={{ fontSize: 14, color: "app_text.main" }}
          >
            {meta.description}
          </LineClamp>
        </Box>
      </Stack>
    </a>
  );
};

export default LinkPreview;
