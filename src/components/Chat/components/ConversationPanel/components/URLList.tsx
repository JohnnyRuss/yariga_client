/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { LineClamp } from "components/Layouts";
import useUrlMetaQuery from "hooks/api/useUrlMetaQuery";
import { selectConversationUrlAssets } from "store/selectors/chat.selectors";

import { URLListSkeleton } from "./";
import { Stack, Box } from "@mui/material";

type URLListT = {
  conversationIsLoading: boolean;
};

const URLList: React.FC<URLListT> = ({ conversationIsLoading }) => {
  const urls = useAppSelector(selectConversationUrlAssets);

  const { getMetaAssets, loadingMetaAssets, metaAssets } = useUrlMetaQuery();

  useEffect(() => {
    if (!urls[0]) return;
    getMetaAssets(urls);
  }, [urls]);

  return loadingMetaAssets || conversationIsLoading ? (
    <URLListSkeleton />
  ) : (
    <Box px={1} pr={0} width="100%" height="100%" className="custom_scrollbar">
      <Stack gap={1}>
        {metaAssets.map((meta, index) => (
          <a
            href={meta.url || "#empty_url"}
            rel="noreferrer"
            target="_blank"
            key={`meta__${meta.title}-${index}`}
          >
            <Stack direction="row" gap={1} alignItems="flex-start">
              <Box
                component="figure"
                width="85px"
                height="85px"
                minWidth="85px"
                borderRadius="5px"
                overflow="hidden"
              >
                <Box
                  component="img"
                  src={meta.image || ""}
                  loading="lazy"
                  title={meta.title || "meta preview"}
                  alt={meta.title || "meta.preview"}
                  width="100%"
                  height="100%"
                  sx={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    maxHeight: "100%",
                  }}
                />
              </Box>

              <Stack pt="3px">
                <LineClamp clamp={2} sx={{ fontWeight: 600, fontSize: 14 }}>
                  {meta.title}
                </LineClamp>

                <LineClamp
                  clamp={2}
                  sx={{ fontWeight: 400, fontSize: 12, color: "app_text.main" }}
                >
                  {meta.description}
                </LineClamp>
              </Stack>
            </Stack>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default URLList;
