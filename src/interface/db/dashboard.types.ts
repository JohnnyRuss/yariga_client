type DashboardT = {
  usersRange: Array<UserRangeT>;
  propertyLocations: Array<PropertyLocationT>;
  forRent: number;
  forSale: number;
  totalProperties: number;
  rentPrices: PropertyMinMaxPriceT;
  salePrices: PropertyMinMaxPriceT;
  propertyTypes: PropertiesByTypeT;
  addressTypes: PropertiesByTypeT;
};

type PropertiesByTypeT = { [key: string]: number };

type PropertyMinMaxPriceT = {
  min: number;
  max: number;
};

type UserRangeT = {
  year: number;
  month: number;
  title: string;
  usersCount: number;
};

type PropertyLocationT = {
  _id: string;
  rent: number;
  sale: number;
  total: number;
  country: string;
};

export type {
  DashboardT,
  PropertyLocationT,
  UserRangeT,
  PropertiesByTypeT,
  PropertyMinMaxPriceT,
};
