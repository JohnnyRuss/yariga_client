import { lazy } from "react";

export const NotFoundPage = lazy(() => import("./NotFoundPage"));
export const DeletedAccountPage = lazy(() => import("./DeletedAccountPage"));

/////////////////
///// AUTH /////
///////////////

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

//////////////////////
///// DASHBOARD /////
////////////////////

export const DashboardPage = lazy(
  () => import("./DashboardPage/DashboardPage")
);

///////////////////////
///// PROPERTIES /////
/////////////////////

export const PropertiesPage = lazy(() => import("./Properties/PropertiesPage"));

export const CreatePropertyPage = lazy(
  () => import("./Properties/CreatePropertyPage")
);

export const PropertyPage = lazy(() => import("./Properties/PropertyPage"));

//////////////////
///// AGENT /////
////////////////

export const AgentsPage = lazy(() => import("./Agents/AgentsPage"));

export const AgentPage = lazy(() => import("./Agents/AgentPage"));

export const AgentPropertiesPage = lazy(
  () => import("./Agents/AgentPropertiesPage")
);

////////////////////
///// REVIEWS /////
//////////////////

export const ReviewsPage = lazy(() => import("./ReviewsPage/ReviewsPage"));

export const AllReviewsPage = lazy(
  () => import("./ReviewsPage/AllReviewsPage")
);

export const PublishedReviewsPage = lazy(
  () => import("./ReviewsPage/PublishedReviewsPage")
);

export const DeletedReviewsPage = lazy(
  () => import("./ReviewsPage/DeletedReviewsPage")
);

/////////////////////
///// MESSAGES /////
///////////////////

export const ChatPage = lazy(() => import("./ChatPage/ChatPage"));
export const ChatFeed = lazy(() => import("./ChatPage/ChatFeed"));

/////////////////////////
///// USER PROFILE /////
///////////////////////

export const UserProfilePage = lazy(
  () => import("./UserProfilePage/UserProfilePage")
);

export const IProfilePage = lazy(() => import("./UserProfilePage/IProfile"));

export const UserPropertiesPage = lazy(
  () => import("./UserProfilePage/UserPropertiesPage")
);

export const IUserPropertiesPage = lazy(
  () => import("./UserProfilePage/IUserPropertiesPage")
);
