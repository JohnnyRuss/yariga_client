/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";

import { RouterHistory } from "config/config";
import { propertiesActions } from "store/reducers/properties.reducer";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";

import UserProfile from "components/UserProfile/UserProfile";

RouterHistory.redirectUnAuthorized();

const IProfile: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectAuthenticatedUser);

  useEffect(() => {
    dispatch(
      propertiesActions.getUserProperties({ userId: user._id, limit: 3 })
    );

    return () => {
      dispatch(propertiesActions.cleanUpUserProperties());
    };
  }, []);

  return <UserProfile user={user} />;
};

export default IProfile;
