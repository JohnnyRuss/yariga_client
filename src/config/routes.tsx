import React from "react";
import { Navigate } from "react-router-dom";

import { PATHS } from "./paths";
import * as Pages from "pages/index";

interface RouteT {
  name: string;
  path: string;
  element: React.ReactNode;
  children?: RouteT[];
}

export const routes: RouteT[] = [
  {
    name: "root-page",
    path: PATHS.root_page,
    element: <Navigate to={PATHS.dashboard_page} />,
  },

  // AUTH

  {
    name: "auth-page-root",
    path: PATHS.auth_page_root,
    element: <Navigate to={PATHS.auth_page_signin} />,
  },
  {
    name: "auth-page-signin",
    path: PATHS.auth_page_signin,
    element: <Pages.SignInPage />,
  },
  {
    name: "auth-page-signup",
    path: PATHS.auth_page_signup,
    element: <Pages.SignUpPage />,
  },
  {
    name: "auth-page-forgot-password",
    path: PATHS.auth_page_forgot_password,
    element: <Pages.ForgotPasswordPage />,
  },
  {
    name: "auth-page-confirm-email",
    path: PATHS.auth_page_confirm_email,
    element: <Pages.ConfirmEmailPage />,
  },
  {
    name: "auth-page-update-password",
    path: PATHS.auth_page_update_password,
    element: <Pages.UpdatePasswordPage />,
  },

  // DASHBOARD

  {
    name: "dashboard-page",
    path: PATHS.dashboard_page,
    element: <Pages.DashboardPage />,
  },

  // PROPERTIES

  {
    name: "properties-page",
    path: PATHS.properties_page,
    element: <Pages.PropertiesPage />,
  },
  {
    name: "property-page",
    path: PATHS.property_page,
    element: <Pages.PropertyPage />,
  },
  {
    name: "create-property-page",
    path: PATHS.create_property_page,
    element: <Pages.CreatePropertyPage />,
  },

  // AGENTS

  {
    name: "agents-page",
    path: PATHS.agents_page,
    element: <Pages.AgentsPage />,
  },
  {
    name: "agent-page",
    path: PATHS.agent_page,
    element: <Pages.AgentPage />,
  },
  {
    name: "agent-properties-page",
    path: PATHS.agent_properties_page,
    element: <Pages.AgentPropertiesPage />,
  },

  // REVIEWS

  {
    name: "reviews-page",
    path: PATHS.reviews_page,
    element: <Pages.ReviewsPage />,
    children: [
      {
        name: "all-reviews-page",
        path: PATHS.all_reviews_page,
        element: <Pages.AllReviewsPage />,
      },
      {
        name: "published-reviews-page",
        path: PATHS.published_reviews_page,
        element: <Pages.PublishedReviewsPage />,
      },
      {
        name: "deleted-reviews-page",
        path: PATHS.deleted_reviews_page,
        element: <Pages.DeletedReviewsPage />,
      },
    ],
  },

  // MESSAGES

  {
    name: "messages-page",
    path: PATHS.chat_page,
    element: <Pages.ChatPage />,
    children: [
      {
        name: "messages-conversation-page",
        path: PATHS.chat_conversation_page,
        element: <Pages.ChatFeed />,
      },
    ],
  },

  // USER PROFILE

  {
    name: "iuser-profile-page",
    path: PATHS.user_iprofile_page,
    element: <Pages.IProfilePage />,
  },
  {
    name: "iuser-properties-page",
    path: PATHS.iuser_properties_page,
    element: <Pages.IUserPropertiesPage />,
  },
  {
    name: "user-profile-page",
    path: PATHS.user_profile_page,
    element: <Pages.UserProfilePage />,
  },
  {
    name: "user-properties-page",
    path: PATHS.user_properties_page,
    element: <Pages.UserPropertiesPage />,
  },

  // NOT FOUND

  {
    name: "not-found-page",
    path: "*",
    element: <Pages.NotFoundPage />,
  },
];
