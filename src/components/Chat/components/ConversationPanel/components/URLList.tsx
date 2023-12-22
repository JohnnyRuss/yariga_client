/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { LineClamp, NoContentMessage } from "components/Layouts";
import useUrlMetaQuery from "hooks/api/useUrlMetaQuery";
import { selectConversationUrlAssets } from "store/selectors/chat.selectors";

import { URLListSkeleton } from "./";
import * as MuiStyled from "./index.styled";
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
    <MuiStyled.URLList className="custom_scrollbar">
      <Stack className="conversation-panel__url-list">
        {metaAssets.length > 0 ? (
          metaAssets.map((meta, index) => (
            <a
              rel="noreferrer"
              target="_blank"
              href={meta.url || "#empty_url"}
              key={`meta__${meta.title}-${index}`}
              className="conversation-panel__url-list__item"
            >
              <Stack className="conversation-panel__url-list__item-stack">
                <Box
                  component="figure"
                  className="conversation-panel__url-list__item-stack--fig"
                >
                  <Box
                    component="img"
                    src={meta.image || ""}
                    loading="lazy"
                    title={meta.title || "meta preview"}
                    alt={meta.title || "meta.preview"}
                    width="100%"
                    height="100%"
                  />
                </Box>

                <Stack className="conversation-panel__url-list__item-stack--content">
                  <LineClamp clamp={2} sx={{ fontWeight: 600, fontSize: 14 }}>
                    {meta.title}
                  </LineClamp>

                  <LineClamp
                    clamp={2}
                    sx={{
                      fontWeight: 400,
                      fontSize: 12,
                      color: "app_text.main",
                    }}
                  >
                    {meta.description}
                  </LineClamp>
                </Stack>
              </Stack>
            </a>
          ))
        ) : (
          <NoContentMessage message="There are now shared url's in conversation" />
        )}
      </Stack>
    </MuiStyled.URLList>
  );
};

export default URLList;
