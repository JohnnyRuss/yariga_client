import { useEffect, useState } from "react";
import { useSearchParams } from "hooks/utils";

import { searchUsersQuery } from "store/saga/api/user.api";
import { useConversationQuery } from "hooks/api/chat";

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
    <Box className="custom_scrollbar" mt="15px">
      {loading ? (
        <Stack>skeleton</Stack>
      ) : (
        <Stack gap={2} pr={1}>
          {users.map((user) => (
            <Stack
              key={user._id}
              onClick={() => onStartConversation(user)}
              direction="row"
              alignItems="center"
              gap={1}
              width="100%"
              sx={{
                cursor: "pointer",
                paddingBottom: "5px",
                boxSizing: "border-box",
                borderBottom: "1px solid",
                borderColor: "transparent",
                transition: "all 0.2s ease",

                "&:hover": {
                  borderColor: "app_blue.light",
                },
              }}
            >
              <Box
                component="figure"
                width="50px"
                height="50px"
                minWidth="50px"
                overflow="hidden"
                borderRadius="100%"
              >
                <Box
                  component="img"
                  src={user.avatar}
                  alt={user.username}
                  title={user.username}
                  loading="lazy"
                  width="100%"
                  height="100%"
                  sx={{ objectFit: "cover" }}
                />
              </Box>

              <Stack>
                <Typography fontWeight={600} textTransform="capitalize">
                  {user.username}
                </Typography>
                <Typography fontSize={14} color="app_text.main">
                  {user.email}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default SearchUsersList;
