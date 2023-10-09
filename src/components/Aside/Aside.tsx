import { NavLink } from "react-router-dom";

import { ASIDE_NAV_ROUTES } from "./utils/asideRoutes";
import * as MuiStyled from "./styles/Aside.styled";
import styles from "./styles/aside.module.css";

const Aside: React.FC = () => {
  return (
    <MuiStyled.AsideBox component="aside">
      {ASIDE_NAV_ROUTES.map((route) => (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${styles.aside_link} ${styles.active}`
              : styles.aside_link
          }
          key={route.id}
          to={
            route.path.match(/:userId/)
              ? route.path.replace(/:userId/g, "123")
              : route.path
          }
        >
          {route.icon}
          <span>{route.label}</span>
        </NavLink>
      ))}
    </MuiStyled.AsideBox>
  );
};

export default Aside;
