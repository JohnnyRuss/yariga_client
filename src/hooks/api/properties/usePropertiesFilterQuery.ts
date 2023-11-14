import { useAppDispatch } from "store/hooks";
import { propertiesFilterActions } from "store/reducers/propertiesFilter.reducer";

export default function usePropertiesFilterQuery() {
  const dispatch = useAppDispatch();

  const getPropertiesFilter = () =>
    dispatch(propertiesFilterActions.getPropertyFilter());

  const cleanUpFilter = () => dispatch(propertiesFilterActions.cleanUpFilter());

  return { getPropertiesFilter, cleanUpFilter };
}
