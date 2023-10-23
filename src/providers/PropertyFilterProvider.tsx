/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  selectPropertyFilter,
  selectPropertyFilterStatus,
} from "store/selectors/properties.selectors";
import { useAppSelector } from "store/hooks";

import {
  CommonFilterT,
  ActivePropertyFilterT,
} from "interface/store/properties.types";
import {
  ReactHookFormSelectFieldPropsT,
  ReactHookFormMultipleSelectFieldPropsT,
} from "interface/components/form";

const searchParamsDefaults = {
  search: "",
  "minPrice[gte]": "",
  "maxPrice[lte]": "",
  cities: {
    _id: "",
    label: "",
    value: "",
  },
  countries: {
    _id: "",
    label: "",
    value: "",
  },
  propertyFeatures: [],
  propertyTypes: {
    _id: "",
    label: "",
    value: "",
  },
  roomTypes: [],
  sort: {
    _id: "",
    label: "",
    value: "",
  },
  states: {
    _id: "",
    label: "",
    value: "",
  },
  statuses: {
    _id: "",
    label: "",
    value: "",
  },
};

interface PropertyFilterProviderT {
  children: React.ReactNode;
}

interface PropertyFilterContextT {
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
}

const PropertyFilterContext = createContext<PropertyFilterContextT>({
  moreFilterAnchorEl: null,
  setMoreFilterAnchorEl: () => {},
  moreFilterIsOpen: false,
  onOpenMoreFilter: () => {},
  onCloseMoreFilter: () => {},
  searchParams: searchParamsDefaults,
  onSelectSearchParams: () => {},
  onMultipleSelectSearchParams: () => {},
  onChangeSearchParams: () => {},
});

const PropertyFilterProvider: React.FC<PropertyFilterProviderT> = ({
  children,
}) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  ///////////////////////////////
  // Control MoreFilter Popup //
  /////////////////////////////

  const [moreFilterAnchorEl, setMoreFilterAnchorEl] =
    useState<null | HTMLElement>(null);

  const moreFilterIsOpen = Boolean(moreFilterAnchorEl);

  const onOpenMoreFilter = (event: React.MouseEvent<HTMLElement>) =>
    setMoreFilterAnchorEl(event.currentTarget);

  const onCloseMoreFilter = () => setMoreFilterAnchorEl(null);

  ////////////////////////////
  // Control Search Params //
  //////////////////////////

  const [searchParams, setSearchParams] =
    useState<ActivePropertyFilterT>(searchParamsDefaults);

  type SearchParamsKeyT = keyof typeof searchParams;

  const urlSearchParams = new URLSearchParams(search);

  const onSelectSearchParams: ReactHookFormSelectFieldPropsT["onChange"] =
    useCallback((value, e, target) => {
      const targetName = e?.target.name
        ? (e?.target.name as SearchParamsKeyT)
        : target
        ? (target as SearchParamsKeyT)
        : "";

      if (!targetName) return;

      if (urlSearchParams.get(targetName) === value.value) {
        urlSearchParams.delete(targetName);

        setSearchParams((prev) => ({
          ...prev,
          [targetName]: searchParamsDefaults[targetName],
        }));
      } else {
        urlSearchParams.set(targetName, value.value);

        setSearchParams((prev) => ({
          ...prev,
          [targetName]: value,
        }));
      }

      navigate(`${pathname}?${urlSearchParams.toString()}`);
    }, []);

  const onMultipleSelectSearchParams: ReactHookFormMultipleSelectFieldPropsT["onChange"] =
    useCallback((value, e) => {
      const targetName = e?.target.name
        ? (e?.target.name as SearchParamsKeyT)
        : "";

      if (!targetName) return;

      const urlValuesArray = urlSearchParams.get(targetName)?.split(",") || [];
      const selectedValues = value.map((item) => item.value);

      if (selectedValues.length > urlValuesArray.length)
        urlSearchParams.set(targetName, selectedValues.join(","));
      else {
        const filteredParams = urlValuesArray
          .filter((param) => selectedValues.includes(param))
          .join(",");

        if (value.length > 0) urlSearchParams.set(targetName, filteredParams);
        else urlSearchParams.delete(targetName);
      }

      setSearchParams((prev) => ({
        ...prev,
        [targetName]: value,
      }));

      navigate(`${pathname}?${urlSearchParams.toString()}`);
    }, []);

  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  const DEBOUNCE_DELAY = 2000;

  const onChangeSearchParams = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const targetName = e.target.name as SearchParamsKeyT;
      const { value } = e.target;

      setSearchParams((prev) => ({
        ...prev,
        [targetName]: value,
      }));

      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (value) urlSearchParams.set(targetName, value);
        else urlSearchParams.delete(targetName);

        navigate(`${pathname}?${urlSearchParams.toString()}`);
      }, DEBOUNCE_DELAY);
    },
    []
  );

  /////////////////////////////////////////
  // Set searchParams Defaults on Mount //
  ///////////////////////////////////////

  const propertyFilters = useAppSelector(selectPropertyFilter);
  const filterStatus = useAppSelector(selectPropertyFilterStatus);

  const getSearchParamDefaultFields = (
    key: SearchParamsKeyT,
    urlValue: string
  ): CommonFilterT | CommonFilterT[] | string => {
    function isPropertyFilterKey<T extends Object>(
      key: PropertyKey,
      block: T
    ): key is keyof T {
      return key in block;
    }

    const getArrayField = (data: CommonFilterT[]): CommonFilterT[] => {
      const selectedValues = urlValue.split(",");
      return data.filter((field) => selectedValues.includes(field.value));
    };

    const getSingleField = (data: CommonFilterT[]): CommonFilterT =>
      data.find((field) => field.value === urlValue) ||
      (searchParamsDefaults[key] as CommonFilterT);

    if (typeof searchParamsDefaults[key] === "string") return urlValue;
    else if (
      Array.isArray(searchParamsDefaults[key]) &&
      isPropertyFilterKey(key, propertyFilters)
    )
      return getArrayField(propertyFilters[key]);
    else if (isPropertyFilterKey(key, propertyFilters))
      return getSingleField(propertyFilters[key]);
    else return "";
  };

  useEffect(() => {
    if (filterStatus.status !== "SUCCESS") return;

    const mountedDefaults: any = searchParamsDefaults;

    urlSearchParams.forEach((value, key) => {
      mountedDefaults[key as SearchParamsKeyT] = getSearchParamDefaultFields(
        key as SearchParamsKeyT,
        value
      );
    });

    setSearchParams((prev) => ({
      ...prev,
      ...mountedDefaults,
    }));
  }, [filterStatus.status]);

  ///////////////
  // Cleanups //
  /////////////

  useEffect(() => {
    const existingPage = urlSearchParams.get("page");

    if (existingPage) return;

    urlSearchParams.set("page", "1");
    navigate(`${pathname}?${urlSearchParams.toString()}`);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <PropertyFilterContext.Provider
      value={{
        moreFilterAnchorEl,
        setMoreFilterAnchorEl,
        moreFilterIsOpen,
        onOpenMoreFilter,
        onCloseMoreFilter,
        //////////////////
        searchParams,
        onSelectSearchParams,
        onMultipleSelectSearchParams,
        onChangeSearchParams,
      }}
    >
      {children}
    </PropertyFilterContext.Provider>
  );
};

export default PropertyFilterProvider;

export const usePropertyFilterContext = () => useContext(PropertyFilterContext);
