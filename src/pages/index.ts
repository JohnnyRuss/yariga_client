import { lazy } from "react";

export const PropertiesPage = lazy(
  () => import("./PropertiesPage/PropertiesPage")
);

export const DashboardPage = lazy(
  () => import("./DashboardPage/DashboardPage")
);

export const AgentsPage = lazy(() => import("./AgentsPage/AgentsPage"));

export const ReviewsPage = lazy(() => import("./ReviewsPage/ReviewsPage"));

export const MessagesPage = lazy(() => import("./MessagesPage/MessagesPage"));

export const UserProfilePage = lazy(
  () => import("./UserProfilePage/UserProfilePage")
);

export const HomePage = lazy(() => import("./HomePage/HomePage"));

export const NotFoundPage = lazy(() => import("./NotFoundPage"));
