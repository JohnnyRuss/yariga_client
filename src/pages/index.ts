import { lazy } from "react";

export const NotFoundPage = lazy(() => import("./NotFoundPage"));

// AUTH

export const SignInPage = lazy(() => import("./AuthPage/SignInPage"));
export const SignUpPage = lazy(() => import("./AuthPage/SignUpPage"));
export const ForgotPasswordPage = lazy(
  () => import("./AuthPage/ForgotPasswordPage")
);
export const ConfirmEmailPage = lazy(
  () => import("./AuthPage/ConfirmEmailPage")
);
export const UpdatePasswordPage = lazy(
  () => import("./AuthPage/UpdatePasswordPage")
);

// PAGES

export const DashboardPage = lazy(
  () => import("./DashboardPage/DashboardPage")
);

export const PropertiesPage = lazy(() => import("./Properties/PropertiesPage"));

export const CreatePropertyPage = lazy(
  () => import("./Properties/CreatePropertyPage")
);

export const PropertyPage = lazy(() => import("./Properties/PropertyPage"));

export const AgentsPage = lazy(() => import("./Agents/AgentsPage"));

export const AgentPage = lazy(() => import("./Agents/AgentPage"));

export const ReviewsPage = lazy(() => import("./ReviewsPage/ReviewsPage"));

export const MessagesPage = lazy(() => import("./MessagesPage/MessagesPage"));

export const UserProfilePage = lazy(
  () => import("./UserProfilePage/UserProfilePage")
);

export const IProfilePage = lazy(() => import("./UserProfilePage/IProfile"));
