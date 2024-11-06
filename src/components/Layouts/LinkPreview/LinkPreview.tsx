/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import useUrlMetaQuery from "hooks/api/useUrlMetaQuery";

import { Box, Stack } from "@mui/material";
import { LineClamp } from "components/Layouts";
import LinkPreviewSkeleton from "./LinkPreviewSkeleton";

type LinkPreviewT = {
  url: string;
  autoFetch?: boolean;
};

const LinkPreview: React.FC<LinkPreviewT> = ({ url }) => {
  const { getMeta, loadingMeta: loading, meta } = useUrlMetaQuery();

  const isUrl =
    meta.image?.startsWith("https://") ||
    meta.image?.startsWith("http://") ||
    meta.image?.startsWith("www.");

  useEffect(() => {
    if (!url) return;
    getMeta(url);
  }, [url]);

  console.log({ title: meta.title, img: meta.image, isUrl });

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

        {meta.image && isUrl && (
          <Box component="figure" width="100%" sx={{ aspectRatio: "16/9" }}>
            <img
              src={meta.image || ""}
              alt={meta.title || ""}
              width="100%"
              height="100%"
              loading="lazy"
              title={meta.title || "link preview"}
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </Box>
        )}

        <Box p={1}>
          {meta.title && (
            <LineClamp
              clamp={2}
              sx={{ fontWeight: 600 }}
              title={meta.title || ""}
            >
              {meta.title}
            </LineClamp>
          )}

          {meta.publisher && (
            <LineClamp clamp={1} sx={{ fontSize: 12 }}>
              Publisher:&nbsp;{meta.publisher}
            </LineClamp>
          )}

          {meta.description && (
            <LineClamp
              clamp={2}
              title={meta.description || ""}
              sx={{ fontSize: 14, color: "app_text.main" }}
            >
              {meta.description}
            </LineClamp>
          )}
        </Box>
      </Stack>
    </a>
  );
};

export default LinkPreview;
