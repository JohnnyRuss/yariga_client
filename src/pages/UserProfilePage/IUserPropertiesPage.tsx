/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";
import { propertiesActions } from "store/reducers/properties.reducer";

import { RouterHistory } from "config/config";

import UserProperties from "components/UserProfile/UserProperties";

RouterHistory.redirectUnAuthorized();

const IUserPropertiesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectAuthenticatedUser);

  const propertiesStatus = useAppSelector(selectUserPropertiesStatus);
  const properties = useAppSelector(selectUserProperties);

  useEffect(() => {
    dispatch(
      propertiesActions.getUserProperties({ userId: user._id, limit: 15 })
    );

    return () => {
      dispatch(propertiesActions.cleanUpUserProperties());
    };
  }, []);

  return (
    <UserProperties
      isIUser={true}
      user={user}
      status={propertiesStatus}
      properties={properties}
    />
  );
};

export default IUserPropertiesPage;
