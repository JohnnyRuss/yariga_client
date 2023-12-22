import { useEffect, useState } from "react";
import { useSearchParams } from "hooks/utils";

import { searchUsersQuery } from "store/saga/api/user.api";
import { useConversationQuery } from "hooks/api/chat";

import * as UI from "./";
import * as MuiStyled from "./styles/SearchList.styled";
import { UserRoleChip } from "components/Layouts";
import { Box, Stack, Typography } from "@mui/material";

import { AxiosResponse } from "axios";
import { UserSearchT } from "interface/db/user.types";

type SearchUsersListT = {
  onSelect: () => void;
};

const SearchUsersList: React.FC<SearchUsersListT> = ({ onSelect }) => {
  const { getParamValue } = useSearchParams();
  const search = getParamValue("search");

  const [users, setUsers] = useState<Array<UserSearchT>>([]);
  const [loading, setLoading] = useState(false);

  const { createConversationAndGetAll } = useConversationQuery();

  const onStartConversation = (selectedUser: UserSearchT) => {
    onSelect();
    createConversationAndGetAll({
      args: { adressat: selectedUser._id },
      load: false,
    });
  };

  useEffect(() => {
    if (!search) return setUsers([]);

    async function searchUsers() {
      try {
        setLoading(true);

        const { data }: AxiosResponse<Array<UserSearchT>> =
          await searchUsersQuery(search as string);

        setUsers(() => data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    searchUsers();
  }, [search]);

  return (
    <MuiStyled.SearchList className="custom_scrollbar">
      {loading ? (
        <UI.SearchUserListSkeleton />
      ) : (
        <Stack className="conversations__search-list">
          {users.map((user) => (
            <Stack
              key={user._id}
              onClick={() => onStartConversation(user)}
              className="conversations__search-list--item"
            >
              <Box
                component="figure"
                className="conversations__search-list--item__fig"
              >
                <Box
                  component="img"
                  loading="lazy"
                  width="100%"
                  height="100%"
                  src={user.avatar}
                  alt={user.username}
                  title={user.username}
                />
              </Box>

              <Stack>
                <Typography className="conversations__search-list--item__username">
                  {user.username}
                </Typography>

                <Typography className="conversations__search-list--item__email">
                  {user.email}
                </Typography>
              </Stack>

              <Box ml="auto">
                <UserRoleChip role={user.role} />
              </Box>
            </Stack>
          ))}
        </Stack>
      )}
    </MuiStyled.SearchList>
  );
};

export default SearchUsersList;
