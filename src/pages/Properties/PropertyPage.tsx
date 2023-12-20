/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, lazy, Suspense } from "react";
import { Spinner } from "components/Layouts";
import { useAppSelector } from "store/hooks";
import { useParams } from "react-router-dom";

import { textCapitalize } from "utils";
import { useScrollTo } from "hooks/utils";
import { DYNAMIC_PATHS } from "config/paths";
import { useRedirectUnAuthorized } from "hooks/auth";
import { selectPropertyHelmet } from "store/selectors/properties.selectors";
import { usePropertiesQuery, useRoomTypesQuery } from "hooks/api/properties";

import Helmet from "pages/Helmet";
import AppLayout from "components/AppLayout/AppLayout";
const Property = lazy(() => import("components/Properties/Property/Property"));

const PropertyPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  const { propertyId } = useParams();

  const { windowScrollToTop } = useScrollTo();

  const { getProperty, cleanUpProperty } = usePropertiesQuery();
  const { getRoomTypes, cleanUpRoomTypes } = useRoomTypesQuery();

  const { status, title, description, author, image } =
    useAppSelector(selectPropertyHelmet);

  useEffect(() => {
    if (!propertyId) return;

    windowScrollToTop();

    getRoomTypes();
    getProperty(propertyId);

    return () => {
      cleanUpRoomTypes();
      cleanUpProperty();
    };
  }, [propertyId]);

  return loading ? (
    <></>
  ) : (
    <>
      {status.status === "SUCCESS" && (
        <Helmet
          type="article"
          author={author}
          description={description}
          image={image}
          title={textCapitalize(title)}
          path={DYNAMIC_PATHS.property_page(propertyId!)}
        />
      )}

      <AppLayout>
        <Suspense fallback={<Spinner />}>
          <Property />
        </Suspense>
      </AppLayout>
    </>
  );
};

export default PropertyPage;
