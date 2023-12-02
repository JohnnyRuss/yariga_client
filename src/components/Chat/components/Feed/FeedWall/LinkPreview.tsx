import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";

import { Box, Typography, Stack } from "@mui/material";

import { LinkMetaT } from "interface/db/utils.types";

type LinkPreviewT = {
  url: string;
};

const LinkPreview: React.FC<LinkPreviewT> = ({ url }) => {
  const [loading, setLoading] = useState(false);

  // const [meta, setMeta] = useState<LinkMetaT>({
  //   url: null,
  //   date: null,
  //   logo: null,
  //   image: null,
  //   title: null,
  //   author: null,
  //   publisher: null,
  //   description: null,
  // });

  const meta = {
    author: "Axel Thesleff",
    date: "2017-01-13T12:01:05.000Z",
    description:
      "#axelthesleff #badkarma #musicvideo #electronicmusicFollow Axel:Instagram https://www.instagram.com/axelthesleffFacebook https://www.facebook.com/axeltheslef…",
    image: "https://i.ytimg.com/vi/-sNWKbnaFkg/maxresdefault.jpg",
    logo: null,
    publisher: "YouTube",
    title: "Axel Thesleff - Bad Karma (Official Music Video)",
    url: "https://www.youtube.com/watch?v=-sNWKbnaFkg",
  };

  useEffect(() => {
    if (!url) return;

    async function getMeta() {
      try {
        setLoading(true);

        const { data }: AxiosResponse<LinkMetaT> = await axios.post(
          "http://localhost:4000/api/v1/utils/meta",
          { url }
        );
        console.log(data);
        // setMeta((prev) => ({
        //   ...prev,
        //   data,
        // }));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    // getMeta();
  }, [url]);

  return loading ? (
    <>loading...</>
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
        <Typography
          fontSize={12}
          p={1}
          color="app_text.main"
          sx={{ textDecoration: "underline" }}
        >
          {meta.url}
        </Typography>

        <Box component="figure" width="100%" sx={{ aspectRatio: "16/9" }}>
          <img
            src={meta.image}
            alt={meta.title}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", maxWidth: "100%" }}
          />
        </Box>

        <Box p={1}>
          <Typography
            fontWeight={600}
            sx={{
              wordWrap: "break-word",
              wordBreak: "break-word",
              maxWidth: "100%",
              display: "-webkit-box",
              textOverflow: "hidden",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {meta.title}
          </Typography>

          {meta.author && (
            <Typography fontSize={12}>Author:&nbsp;{meta.author}</Typography>
          )}

          {meta.publisher && (
            <Typography fontSize={12}>
              Publisher:&nbsp;{meta.publisher}
            </Typography>
          )}

          <Typography
            fontSize={14}
            color="app_text.main"
            title={meta.description}
            sx={{
              wordWrap: "break-word",
              wordBreak: "break-word",
              maxWidth: "100%",
              display: "-webkit-box",
              textOverflow: "hidden",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {meta.description}
          </Typography>
        </Box>
      </Stack>
    </a>
  );
};

export default LinkPreview;
