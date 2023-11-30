import { PATHS } from "config/paths";
import { nanoid } from "@reduxjs/toolkit";

import {
  Dashboard,
  HomeWork,
  People,
  StarOutline,
  ChatBubbleOutline,
  AccountCircle,
} from "@mui/icons-material";

interface AsideNavRouteT {
  label: string;
  icon: React.ReactNode;
  path: string;
  id: string;
}

const ASIDE_NAV_ROUTES: AsideNavRouteT[] = [
  {
    label: "dashboard",
    icon: <Dashboard />,
    path: PATHS.dashboard_page,
    id: nanoid(),
  },
  {
    label: "properties",
    icon: <HomeWork />,
    path: PATHS.properties_page,
    id: nanoid(),
  },
  {
    label: "agents",
    icon: <People />,
    path: PATHS.agents_page,
    id: nanoid(),
  },
  {
    label: "reviews",
    icon: <StarOutline />,
    path: PATHS.reviews_page,
    id: nanoid(),
  },
  {
    label: "messages",
    icon: <ChatBubbleOutline />,
    path: PATHS.chat_page,
    id: nanoid(),
  },
  {
    label: "my profile",
    icon: <AccountCircle />,
    path: PATHS.user_iprofile_page,
    id: nanoid(),
  },
];

export { ASIDE_NAV_ROUTES };
