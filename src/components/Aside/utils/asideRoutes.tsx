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
  title: string;
  allow: Array<"USER" | "AGENT">;
}

const ASIDE_NAV_ROUTES: AsideNavRouteT[] = [
  {
    allow: ["USER", "AGENT"],
    label: "dashboard",
    title: "yariga dashboard page",
    icon: <Dashboard />,
    path: PATHS.dashboard_page,
    id: nanoid(),
  },
  {
    allow: ["USER", "AGENT"],
    label: "properties",
    title: "yariga properties page",
    icon: <HomeWork />,
    path: PATHS.properties_page,
    id: nanoid(),
  },
  {
    allow: ["USER"],
    label: "agents",
    title: "yariga agent page",
    icon: <People />,
    path: PATHS.agents_page,
    id: nanoid(),
  },
  {
    allow: ["USER"],
    label: "reviews",
    title: "yariga reviews page",
    icon: <StarOutline />,
    path: PATHS.reviews_page,
    id: nanoid(),
  },
  {
    allow: ["USER", "AGENT"],
    label: "messages",
    title: "yariga chat page",
    icon: <ChatBubbleOutline />,
    path: PATHS.chat_page,
    id: nanoid(),
  },
  {
    allow: ["USER", "AGENT"],
    label: "my profile",
    title: "yariga profile page",
    icon: <AccountCircle />,
    path: PATHS.user_iprofile_page,
    id: nanoid(),
  },
];

export { ASIDE_NAV_ROUTES };
