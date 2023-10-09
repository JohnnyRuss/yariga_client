import paths from "config/paths";
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
    path: paths.dashboard_page,
    id: nanoid(),
  },
  {
    label: "properties",
    icon: <HomeWork />,
    path: paths.properties_page,
    id: nanoid(),
  },
  {
    label: "agents",
    icon: <People />,
    path: paths.agents_page,
    id: nanoid(),
  },
  {
    label: "reviews",
    icon: <StarOutline />,
    path: paths.reviews_page,
    id: nanoid(),
  },
  {
    label: "messages",
    icon: <ChatBubbleOutline />,
    path: paths.messages_page,
    id: nanoid(),
  },
  {
    label: "user profile",
    icon: <AccountCircle />,
    path: paths.user_profile_page,
    id: nanoid(),
  },
];

export { ASIDE_NAV_ROUTES };
