import {
  ReactHookFormSelectFieldPropsT,
  ReactHookFormMultipleSelectFieldPropsT,
} from "interface/components/form";
import { ActivePropertyFilterT } from "interface/store/propertiesFilter.types";
import { searchParamsDefaults } from "./utils";

type PropertyFilterProviderT = {
  children: React.ReactNode;
};

type PropertyFilterContextT = {
  moreFilterAnchorEl: null | HTMLElement;
  setMoreFilterAnchorEl: React.Dispatch<
    React.SetStateAction<null | HTMLElement>
  >;
  moreFilterIsOpen: boolean;
  onOpenMoreFilter: (event: React.MouseEvent<HTMLElement>) => void;
  onCloseMoreFilter: () => void;
  //////////////////////////////////////////////////////////////////
  searchParams: ActivePropertyFilterT;
  onSelectSearchParams: ReactHookFormSelectFieldPropsT["onChange"];
  onMultipleSelectSearchParams: ReactHookFormMultipleSelectFieldPropsT["onChange"];
  onChangeSearchParams: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type SearchParamsKeyT = keyof typeof searchParamsDefaults;

export type {
  PropertyFilterProviderT,
  PropertyFilterContextT,
  SearchParamsKeyT,
};
