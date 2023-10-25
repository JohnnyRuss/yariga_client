import { lazy } from "react";

export const NotFoundPage = lazy(() => import("./NotFoundPage"));

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

export const DashboardPage = lazy(
  () => import("./DashboardPage/DashboardPage")
);

export const PropertiesPage = lazy(() => import("./Properties/PropertiesPage"));

export const CreatePropertyPage = lazy(
  () => import("./Properties/CreatePropertyPage")
);

export const PropertyPage = lazy(() => import("./Properties/PropertyPage"));

export const AgentsPage = lazy(() => import("./AgentsPage/AgentsPage"));

export const ReviewsPage = lazy(() => import("./ReviewsPage/ReviewsPage"));

export const MessagesPage = lazy(() => import("./MessagesPage/MessagesPage"));

export const UserProfilePage = lazy(
  () => import("./UserProfilePage/UserProfilePage")
);
