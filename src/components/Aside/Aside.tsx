import { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSearchParams } from "hooks/utils";
import { useAppSelector } from "store/hooks";

import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import { ASIDE_NAV_ROUTES } from "./utils/asideRoutes";
import * as MuiStyled from "./styles/Aside.styled";
import styles from "./styles/aside.module.css";

const Aside: React.FC = () => {
  const { pathname } = useLocation();
  const { getParamValue } = useSearchParams();

  const currUser = useAppSelector(selectAuthenticatedUser);

  const isOnFeed =
    getParamValue("feed") === "1" && pathname.includes("messages");

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
        >
          {route.icon}
          <span>{route.label}</span>
        </NavLink>
      ))}
    </MuiStyled.AsideBox>
  );
};

export default memo(Aside);
