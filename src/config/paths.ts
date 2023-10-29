const paths = {
  root_page: "/",
  auth_page_root: "/auth",
  auth_page_signin: "/auth/signin",
  auth_page_signup: "/auth/signup",
  auth_page_forgot_password: "/auth/forgot-password",
  auth_page_confirm_email: "/auth/confirm-email",
  auth_page_update_password: "/auth/update-password",
  dashboard_page: "/dashboard",
  properties_page: "/properties",
  create_property_page: "/properties/create",
  property_page: "/properties/:propertyId",
  agents_page: "/agents",
  agent_page: "/agents/:agentId",
  reviews_page: "/reviews",
  messages_page: "/messages",
  user_iprofile_page: "/iuser",
  user_profile_page: "/user/:userId",
};

const dynamic_paths = {
  property_page: (propertyId: string) =>
    paths.property_page.replace(":propertyId", propertyId),
  agent_page: (agentId: string) =>
    paths.agent_page.replace(":agentId", agentId),
  profile_page: (userId: string) =>
    paths.user_profile_page.replace(":userId", userId),
};

export { paths, dynamic_paths };
