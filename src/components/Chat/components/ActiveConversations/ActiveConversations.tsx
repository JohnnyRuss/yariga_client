/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useState, useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { useSearchParams } from "hooks/utils";
import { selectConversationsStatus } from "store/selectors/chat.selectors";

import * as UI from "./components";
import { Stack } from "@mui/material";

const ActiveConversations: React.FC = () => {
  const status = useAppSelector(selectConversationsStatus);

  const { getParamValue, appendParam, removeParam } = useSearchParams();
  const isOnFeed = getParamValue("feed") === "1";

  const searchParam = getParamValue("search");
  const isSearching = typeof searchParam === "string" && searchParam !== "";

  const [search, setSearch] = useState("");

  const onSearchFocus = () => {
    if (!searchParam) appendParam("search", "");
  };

  const onSearchBlur = () => {
    if (!search) removeParam("search");
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSelectSearchResult = () => {
    removeParam("search");
    setSearch("");
  };

  useEffect(() => {
    if (!search && searchParam) setSearch(searchParam);

    const timeoutId = setTimeout(() => {
      if (search) appendParam("search", search);
    }, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <Stack
      p={1}
      flex={1}
      component="aside"
      borderRight="1px solid"
      borderColor="app_text.contrastText"
      flexBasis={{ xs: "100%", app_desktop: "300px" }}
      maxWidth={{ xs: "100%", app_desktop: "350px" }}
      display={{ xs: isOnFeed ? "none" : "flex", app_desktop: "flex" }}
    >
      <UI.Search
        search={search}
        disabled={status.loading}
        onSearchBlur={onSearchBlur}
        onSearchFocus={onSearchFocus}
        onSearchChange={onSearchChange}
      />

      {isSearching && <UI.SearchUsersList onSelect={onSelectSearchResult} />}

      {!isSearching && <UI.ConversationsList loading={status.loading} />}
    </Stack>
  );
};

export default memo(ActiveConversations);
