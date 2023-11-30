const PATHS = {
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
  all_reviews_page: "/reviews/all",
  published_reviews_page: "/reviews/published",
  deleted_reviews_page: "/reviews/deleted",
  // MESSAGES
  chat_page: "/messages",
  chat_conversation_page: "/messages/:conversationId",
  // USER PROFILE
  user_iprofile_page: "/iuser",
  iuser_properties_page: "/iuser/properties",
  user_profile_page: "/user/:userId",
  user_properties_page: "/user/:userId/properties",
};

const DYNAMIC_PATHS = {
  // PROPERTIES
  property_page: (propertyId: string) =>
    PATHS.property_page.replace(":propertyId", propertyId),
  // AGENTS
  agent_page: (agentId: string) =>
    PATHS.agent_page.replace(":agentId", agentId),
  agent_properties_page: (agentId: string) =>
    PATHS.agent_properties_page.replace(":agentId", agentId),
  // USER PROFILE
  user_profile_page: (userId: string) =>
    PATHS.user_profile_page.replace(":userId", userId),
  user_properties_page: (userId: string) =>
    PATHS.user_properties_page.replace(":userId", userId),
  // MESSAGES
  chat_conversation__page: (conversationId: string) =>
    PATHS.chat_conversation_page.replace(":conversationId", conversationId),
};

export { PATHS, DYNAMIC_PATHS };
