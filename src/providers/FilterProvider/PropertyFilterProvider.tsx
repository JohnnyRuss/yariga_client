/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useAppSelector } from "store/hooks";
import { useNavigate, useLocation } from "react-router-dom";

import {
  selectPropertyFilter,
  selectPropertyFilterStatus,
} from "store/selectors/propertiesFilter.selectors";

import { ActivePropertyFilterT } from "interface/store/propertiesFilter.types";

import {
  ReactHookFormSelectFieldPropsT,
  ReactHookFormMultipleSelectFieldPropsT,
} from "interface/components/form";

import {
  PropertyFilterProviderT,
  PropertyFilterContextT,
  SearchParamsKeyT,
} from "./types";

import { getSearchParamDefaultFields, searchParamsDefaults } from "./utils";

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

  const DEBOUNCE_DELAY = 2000;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

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

  useEffect(() => {
    if (filterStatus.status !== "SUCCESS") return;

    const mountedDefaults: any = searchParamsDefaults;

    urlSearchParams.forEach((value, key) => {
      mountedDefaults[key as SearchParamsKeyT] = getSearchParamDefaultFields(
        key as SearchParamsKeyT,
        value,
        propertyFilters
      );
    });

    setSearchParams((prev) => ({
      ...prev,
      ...searchParamsDefaults,
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
