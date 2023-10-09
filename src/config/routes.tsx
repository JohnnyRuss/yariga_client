import React from "react";

import paths from "./paths";
import * as Pages from "pages/index";

interface RouteT {
  name: string;
  path: string;
  element: React.ReactNode;
  children?: RouteT[];
}

export const routes: RouteT[] = [
  {
    name: "home-page",
    path: paths.home_page,
    element: <Pages.HomePage />,
  },
  {
    name: "dashboard-page",
    path: paths.dashboard_page,
    element: <Pages.DashboardPage />,
  },
  {
    name: "properties-page",
    path: paths.properties_page,
    element: <Pages.PropertiesPage />,
  },
  {
    name: "agents-page",
    path: paths.agents_page,
    element: <Pages.AgentsPage />,
  },
  {
    name: "reviews-page",
    path: paths.reviews_page,
    element: <Pages.ReviewsPage />,
  },
  {
    name: "messages-page",
    path: paths.messages_page,
    element: <Pages.MessagesPage />,
  },
  {
    name: "user-profile-page",
    path: paths.user_profile_page,
    element: <Pages.UserProfilePage />,
  },
  {
    name: "not-found-page",
    path: "*",
    element: <Pages.NotFoundPage />,
  },
];
