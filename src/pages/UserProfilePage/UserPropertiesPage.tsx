/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/hooks";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";
import { selectGuest } from "store/selectors/user.selectors";
import { userActions } from "store/reducers/user.reducer";
import { propertiesActions } from "store/reducers/properties.reducer";

import { RouterHistory } from "config/config";

import UserProperties from "components/UserProfile/UserProperties";

RouterHistory.redirectUnAuthorized();

const UserPropertiesPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { userId } = useParams();

  const user = useAppSelector(selectGuest);

  const propertiesStatus = useAppSelector(selectUserPropertiesStatus);
  const properties = useAppSelector(selectUserProperties);

  useEffect(() => {
    if (!userId) return;

    dispatch(userActions.getUser({ userId }));
    dispatch(propertiesActions.getUserProperties({ userId, limit: 15 }));

    return () => {
      dispatch(userActions.cleanUpGuest());
      dispatch(propertiesActions.cleanUpUserProperties());
    };
  }, [userId]);

  return (
    <UserProperties
      isIUser={false}
      user={user}
      status={propertiesStatus}
      properties={properties}
    />
  );
};

export default UserPropertiesPage;
