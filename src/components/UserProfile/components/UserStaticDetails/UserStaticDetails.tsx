import { Stack, Typography } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import UserStaticDetailsSkeleton from "./UserStaticDetailsSkeleton";
import { EmailButton, PhoneButton, ChatWithButton } from "components/Layouts";

import { UserT } from "interface/db/user.types";

interface UserStaticDetailsT {
  email: UserT["email"];
  location?: UserT["location"];
  phone?: UserT["phone"];
  username: string;
  userId: string;
  isAuthenticatedUser: boolean;
  loading: boolean;
}

const UserStaticDetails: React.FC<UserStaticDetailsT> = ({
  email,
  phone,
  userId,
  username,
  location,
  loading,
  isAuthenticatedUser,
}) => {
  return loading ? (
    <UserStaticDetailsSkeleton />
  ) : (
    <>
      <Stack gap="6px" mt="30px">
        <Typography color="app_text.main" lineHeight="22px" fontSize={14}>
          Address
        </Typography>

        <Typography
          p="10px"
          fontSize={14}
          borderRadius="6px"
          border="1px solid"
          borderColor="app_text.main"
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <LocationOn sx={{ fontSize: 20 }} />

          {location && (
            <Typography component="span">
              {location?.displayName || ""}
            </Typography>
          )}

          {!location && (
            <Typography component="span" fontWeight={600} color="app_text.main">
              Location is not specified
            </Typography>
          )}
        </Typography>
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} gap={3} mt="20px">
        <Stack flex={1} gap="6px">
          <Typography color="app_text.main" lineHeight="22px" fontSize={14}>
            Phone Number
          </Typography>

          <Typography
            p="10px"
            fontSize={14}
            borderRadius="6px"
            border="1px solid"
            borderColor="app_text.main"
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Phone sx={{ fontSize: 20 }} />
            {phone && <Typography component="span">{phone}</Typography>}

            {!phone && (
              <Typography
                component="span"
                fontWeight={600}
                color="app_text.main"
              >
                Phone Number is not specified
              </Typography>
            )}
          </Typography>
        </Stack>

        <Stack flex={1} gap="6px">
          <Typography color="app_text.main" lineHeight="22px" fontSize={14}>
            Email
          </Typography>

          <Typography
            p="10px"
            fontSize={14}
            borderRadius="6px"
            border="1px solid"
            borderColor="app_text.main"
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Email sx={{ fontSize: 20 }} />
            {email}
          </Typography>
        </Stack>
      </Stack>

      {!isAuthenticatedUser && (
        <Stack direction="row" mt="20px" gap={2}>
          <EmailButton email={email} subject="Yariga" />

          {phone && <PhoneButton phone={phone} />}

          <ChatWithButton adressatId={userId} adressatName={username} />
        </Stack>
      )}
    </>
  );
};

export default UserStaticDetails;
