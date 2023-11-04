/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector, useAppDispatch } from "store/hooks";

import {
  selectUserProperties,
  selectUserPropertiesStatus,
} from "store/selectors/properties.selectors";
import { selectAuthenticatedUser } from "store/selectors/user.selectors";
import { propertiesActions } from "store/reducers/properties.reducer";

import {
  NoContentMessage,
  PropertyCardHorizontal,
  PropertyCardHorizontalSkeleton,
} from "components/Layouts";
import { Stack, Box } from "@mui/material";

interface HireByPropertyT {
  searchStr: string;
  onHire: (args: { propertyId: string }) => void;
}

const HireByProperty: React.FC<HireByPropertyT> = ({ searchStr, onHire }) => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectAuthenticatedUser);

  const status = useAppSelector(selectUserPropertiesStatus);
  const allProperties = useAppSelector(selectUserProperties);

  const propertiesToRender = allProperties.filter(
    (property) => !property.agent || property.agent === null
  );

  useEffect(() => {
    dispatch(
      propertiesActions.getUserProperties({ userId: user._id, limit: 15 })
    );

    return () => {
      dispatch(propertiesActions.cleanUpUserProperties());
    };
  }, []);

  return (
    <Stack
      gap={3}
      pr="15px"
      width="70vh"
      height="70vh"
      direction="row"
      flexWrap="wrap"
      className="custom_scrollbar"
    >
      {status.loading &&
        Array.from(new Array(4)).map(() => (
          <PropertyCardHorizontalSkeleton key={nanoid()} />
        ))}

      {!status.loading && propertiesToRender[0] ? (
        propertiesToRender
          .filter((property) =>
            searchStr !== ""
              ? new RegExp(searchStr, "i").test(property.title) ||
                new RegExp(searchStr, "i").test(property.location.displayName)
              : property
          )
          .map((property) => (
            <Box
              key={property._id}
              position="relative"
              sx={{ height: "fit-content" }}
              onClick={() => onHire({ propertyId: property._id })}
            >
              <PropertyCardHorizontal property={property} fullWidth={true} />
              <Box
                position="absolute"
                sx={{ inset: 0, borderRadius: "10px", cursor: "pointer" }}
              />
            </Box>
          ))
      ) : (
        <NoContentMessage message="There are no Available Properties" />
      )}
    </Stack>
  );
};

export default HireByProperty;
