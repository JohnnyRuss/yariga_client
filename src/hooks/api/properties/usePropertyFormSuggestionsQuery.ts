import { useAppDispatch } from "store/hooks";
import { createPropertyFormActions } from "store/reducers/createPropertyForm.reducer";

export default function usePropertyFormSuggestionsQuery() {
  const dispatch = useAppDispatch();

  const getSuggestions = () =>
    dispatch(createPropertyFormActions.getPropertyFormSuggestions());

  const cleanUpSuggestions = () =>
    dispatch(createPropertyFormActions.cleanUpPropertySuggestions());

  return { getSuggestions, cleanUpSuggestions };
}
