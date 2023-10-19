import { LoadingStatusT } from "./common.types";

export interface PropertiesStateT {
  status: LoadingStatusT;
}

export interface CreatePropertyArgsT {
  title: string;
  description: string;
  propertyType: string;
  location: {
    addressType: string;
    displayName: string;
    name: string;
    lat: string;
    lon: string;
  };
  price: number;
  images?: Array<string>;
  new_images?: Array<File>;
  images_to_delete: Array<string>;
}
