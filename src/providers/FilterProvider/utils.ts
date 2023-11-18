import {
  CommonFilterT,
  PropertyFilterT,
} from "interface/store/propertiesFilter.types";
import { SearchParamsKeyT } from "./types";

const searchParamsDefaults = {
  search: "",

  "price[gte]": "",

  "price[lte]": "",

  city: {
    _id: "",
    label: "",
    value: "",
  },

  country: {
    _id: "",
    label: "",
    value: "",
  },

  features: [],

  propertyType: {
    _id: "",
    label: "",
    value: "",
  },

  rooms: [],

  sort: {
    _id: "",
    label: "",
    value: "",
  },

  state: {
    _id: "",
    label: "",
    value: "",
  },

  propertyStatus: {
    _id: "",
    label: "",
    value: "",
  },
};

const getSearchParamDefaultFields = (
  key: SearchParamsKeyT,
  urlValue: string,
  filter: PropertyFilterT
): CommonFilterT | CommonFilterT[] | string => {
  if (typeof searchParamsDefaults[key] === "string") return urlValue;
  else if (
    Array.isArray(searchParamsDefaults[key]) &&
    isPropertyFilterKey(key, filter)
  )
    return getArrayField(filter[key], urlValue);
  else if (isPropertyFilterKey(key, filter))
    return getSingleField(filter[key], urlValue, key);
  else return "";
};

export { searchParamsDefaults, getSearchParamDefaultFields };

// HELPERS //

function isPropertyFilterKey<T extends Object>(
  key: PropertyKey,
  block: T
): key is keyof T {
  return key in block;
}

function getArrayField(
  data: CommonFilterT[],
  urlValue: string
): CommonFilterT[] {
  const selectedValues = urlValue.split(",");
  return data.filter((field) => selectedValues.includes(field.value));
}

function getSingleField(
  data: CommonFilterT[],
  urlValue: string,
  key: SearchParamsKeyT
): CommonFilterT {
  return (
    data.find((field) => field.value === urlValue) ||
    (searchParamsDefaults[key] as CommonFilterT)
  );
}
