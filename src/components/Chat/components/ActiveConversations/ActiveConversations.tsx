/* eslint-disable react-hooks/exhaustive-deps */
import { useAppSelector } from "store/hooks";
import { memo, useState, useEffect } from "react";

import { useSearchParams } from "hooks/utils";
import { selectConversationsStatus } from "store/selectors/chat.selectors";

import * as UI from "./components";
import * as MuiStyled from "./ActiveConversations.styled";

const ActiveConversations: React.FC = () => {
  const status = useAppSelector(selectConversationsStatus);

  const { getParamValue, appendParam, removeParam } = useSearchParams();
  const isOnFeed = getParamValue("feed") === "1";

  const searchParam = getParamValue("search");
  const isSearching = typeof searchParam === "string" && searchParam !== "";

  const [search, setSearch] = useState(searchParam || "");

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
    const timeoutId = setTimeout(() => {
      if (search) appendParam("search", search);
      else if (!search && searchParam) removeParam("search");
    }, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  return (
    <MuiStyled.ActiveConversations is_on_feed={isOnFeed ? "1" : "0"}>
      <UI.Search
        search={search}
        disabled={status.loading}
        onSearchBlur={onSearchBlur}
        onSearchFocus={onSearchFocus}
        onSearchChange={onSearchChange}
      />

      {isSearching && <UI.SearchUsersList onSelect={onSelectSearchResult} />}

      {!isSearching && <UI.ConversationsList loading={status.loading} />}
    </MuiStyled.ActiveConversations>
  );
};

export default memo(ActiveConversations);
