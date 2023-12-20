import { Suspense, lazy } from "react";

import { Spinner } from "components/Layouts";
const DeletedAccount = lazy(
  () => import("components/DeletedAccount/DeletedAccount")
);

const DeletedAccountPage: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <DeletedAccount />
    </Suspense>
  );
};

export default DeletedAccountPage;
