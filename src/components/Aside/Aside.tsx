import { memo } from "react";
import { useSearchParams } from "hooks/utils";
import { useAppSelector } from "store/hooks";
import { NavLink, useLocation } from "react-router-dom";

import { selectAuthenticatedUser } from "store/selectors/user.selectors";
import { selectUnreadConversationsCount } from "store/selectors/chat.selectors";

import { Box } from "@mui/material";
import styles from "./styles/aside.module.css";
import * as MuiStyled from "./styles/Aside.styled";
import { ASIDE_NAV_ROUTES } from "./utils/asideRoutes";

const Aside: React.FC = () => {
  const { pathname } = useLocation();
  const { getParamValue } = useSearchParams();

  const currUser = useAppSelector(selectAuthenticatedUser);

  const isOnFeed =
    getParamValue("feed") === "1" && pathname.includes("messages");

  const unreadConversationCount = useAppSelector(
    selectUnreadConversationsCount
  );

  return (
    <MuiStyled.AsideBox
      component="aside"
      display={{ xs: isOnFeed ? "none" : "flex", md: "flex" }}
    >
      {ASIDE_NAV_ROUTES.filter((route) =>
        route.allow.includes(currUser.role)
      ).map((route) => (
        <NavLink
          title={route.title}
          className={({ isActive }) =>
            isActive
              ? `${styles.aside_link} ${styles.active}`
              : styles.aside_link
          }
          key={route.id}
          to={route.path}
          style={{ position: "relative" }}
        >
          {route.icon}

          <span>{route.label}</span>

          {route.label === "messages" && unreadConversationCount > 0 && (
            <Box
              position="absolute"
              right={{ xs: "-2px", md: "7px" }}
              top={{ xs: "-2px", md: "auto" }}
              width="20px"
              height="20px"
              borderRadius="100%"
              bgcolor="error.main"
              display="flex"
              justifyContent="center"
              alignItems="center"
              fontSize={13}
              color="app_text.light"
            >
              {unreadConversationCount}
            </Box>
          )}
        </NavLink>
      ))}
    </MuiStyled.AsideBox>
  );
};

export default memo(Aside);
