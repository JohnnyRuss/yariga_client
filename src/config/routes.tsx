import React from "react";
import { Navigate } from "react-router-dom";

import { paths } from "./paths";
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
    path: paths.root_page,
    element: <Navigate to={paths.dashboard_page} />,
  },

  // AUTH

  {
    name: "auth-page-root",
    path: paths.auth_page_root,
    element: <Navigate to={paths.auth_page_signin} />,
  },
  {
    name: "auth-page-signin",
    path: paths.auth_page_signin,
    element: <Pages.SignInPage />,
  },
  {
    name: "auth-page-signup",
    path: paths.auth_page_signup,
    element: <Pages.SignUpPage />,
  },
  {
    name: "auth-page-forgot-password",
    path: paths.auth_page_forgot_password,
    element: <Pages.ForgotPasswordPage />,
  },
  {
    name: "auth-page-confirm-email",
    path: paths.auth_page_confirm_email,
    element: <Pages.ConfirmEmailPage />,
  },
  {
    name: "auth-page-update-password",
    path: paths.auth_page_update_password,
    element: <Pages.UpdatePasswordPage />,
  },

  // DASHBOARD

  {
    name: "dashboard-page",
    path: paths.dashboard_page,
    element: <Pages.DashboardPage />,
  },

  // PROPERTIES

  {
    name: "properties-page",
    path: paths.properties_page,
    element: <Pages.PropertiesPage />,
  },
  {
    name: "property-page",
    path: paths.property_page,
    element: <Pages.PropertyPage />,
  },
  {
    name: "create-property-page",
    path: paths.create_property_page,
    element: <Pages.CreatePropertyPage />,
  },

  // AGENTS

  {
    name: "agents-page",
    path: paths.agents_page,
    element: <Pages.AgentsPage />,
  },
  {
    name: "agent-page",
    path: paths.agent_page,
    element: <Pages.AgentPage />,
  },
  {
    name: "agent-properties-page",
    path: paths.agent_properties_page,
    element: <Pages.AgentPropertiesPage />,
  },

  // REVIEWS

  {
    name: "reviews-page",
    path: paths.reviews_page,
    element: <Pages.ReviewsPage />,
  },

  // MESSAGES

  {
    name: "messages-page",
    path: paths.messages_page,
    element: <Pages.MessagesPage />,
  },

  // USER PROFILE

  {
    name: "iuser-profile-page",
    path: paths.user_iprofile_page,
    element: <Pages.IProfilePage />,
  },
  {
    name: "iuser-properties-page",
    path: paths.iuser_properties_page,
    element: <Pages.IUserPropertiesPage />,
  },
  {
    name: "user-profile-page",
    path: paths.user_profile_page,
    element: <Pages.UserProfilePage />,
  },
  {
    name: "user-properties-page",
    path: paths.user_properties_page,
    element: <Pages.UserPropertiesPage />,
  },

  // NOT FOUND

  {
    name: "not-found-page",
    path: "*",
    element: <Pages.NotFoundPage />,
  },
];
