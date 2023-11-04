const paths = {
  root_page: "/",
  // AUTH
  auth_page_root: "/auth",
  auth_page_signin: "/auth/signin",
  auth_page_signup: "/auth/signup",
  auth_page_forgot_password: "/auth/forgot-password",
  auth_page_confirm_email: "/auth/confirm-email",
  auth_page_update_password: "/auth/update-password",
  // DASHBOARD
  dashboard_page: "/dashboard",
  // PROPERTIES
  properties_page: "/properties",
  create_property_page: "/properties/create",
  property_page: "/properties/:propertyId",
  // AGENTS
  agents_page: "/agents",
  agent_page: "/agents/:agentId",
  agent_properties_page: "/agents/:agentId/properties",
  // REVIEWS
  reviews_page: "/reviews",
  // MESSAGES
  messages_page: "/messages",
  // USER PROFILE
  user_iprofile_page: "/iuser",
  iuser_properties_page: "/iuser/properties",
  user_profile_page: "/user/:userId",
  user_properties_page: "/user/:userId/properties",
};

const dynamic_paths = {
  // PROPERTIES
  property_page: (propertyId: string) =>
    paths.property_page.replace(":propertyId", propertyId),
  // AGENTS
  agent_page: (agentId: string) =>
    paths.agent_page.replace(":agentId", agentId),
  agent_properties_page: (agentId: string) =>
    paths.agent_properties_page.replace(":agentId", agentId),
  // USER PROFILE
  user_profile_page: (userId: string) =>
    paths.user_profile_page.replace(":userId", userId),
  user_properties_page: (userId: string) =>
    paths.user_properties_page.replace(":userId", userId),
};

export { paths, dynamic_paths };
