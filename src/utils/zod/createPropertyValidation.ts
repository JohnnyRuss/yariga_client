import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PROPERTY_STATUS } from "interface/db/properties.types";

import {
  greaterThanZero,
  isNumeric,
  isBase64Str,
} from "utils/zod/helpers/customValidators";
import { CLOUDINARY_ROOT_URL } from "config/config";

const CreatePropertyValidationSchema = z
  .object({
    title: z.string().trim().toLowerCase().min(3),
    propertyStatus: z.object({
      label: z.string(),
      value: z.enum(["SALE", "RENT"]),
      _id: z.string(),
    }),
    price: z
      .string()
      .refine(isNumeric.validator, {
        message: isNumeric.message,
      })
      .refine(greaterThanZero.validator, { message: greaterThanZero.message }),
    propertyType: z.object({
      label: z.string(),
      value: z.string().trim().min(1),
      _id: z.string().trim().min(1),
    }),
    area: z
      .string()
      .refine(isNumeric.validator, {
        message: isNumeric.message,
      })
      .refine(greaterThanZero.validator, { message: greaterThanZero.message }),
    rooms: z
      .array(
        z.object({
          label: z.string().trim().min(1),
          value: z.string().trim().min(1),
          _id: z.string().trim().min(1),
        })
      )
      .min(1),
    features: z
      .array(
        z.object({
          label: z.string().trim().min(1),
          value: z.string().trim().min(1),
          _id: z.string().trim().min(1),
        })
      )
      .min(1),
    bedroomsAmount: z
      .string()
      .refine(isNumeric.validator, {
        message: isNumeric.message,
      })
      .refine(greaterThanZero.validator, { message: greaterThanZero.message }),
    bathroomsAmount: z.string(),
    location: z.object({
      name: z.string().trim().toLowerCase().min(1),
      displayName: z.string().trim().min(1),
      city: z.string().trim().toLowerCase().min(1),
      country: z.string().trim().toLowerCase().min(1),
      state: z.string().trim().toLowerCase(),
      addressType: z.string().trim().toLowerCase().min(1),
      lat: z.string().trim().min(1),
      lon: z.string().trim().min(1),
    }),
    description: z.string().trim().min(10),
    images: z.array(z.string().url()),
    images_to_delete: z.array(z.string().url()).optional(),
  })
  .refine(
    (data) => {
      const allImages = data.images;

      if (!Array.isArray(allImages)) return false;

      const existingImages = allImages.filter((img) =>
        img.startsWith(CLOUDINARY_ROOT_URL)
      );

      const hasNewImages = allImages.filter((img) => isBase64Str(img));

      if (!existingImages && !hasNewImages) return false;
      else return true;
    },
    { path: ["new_images"], message: "please provide us property images" }
  );

export type CreatePropertyFormT = z.infer<
  typeof CreatePropertyValidationSchema
>;

const useCreatePropertyForm = () =>
  useForm<CreatePropertyFormT>({
    defaultValues: {
      title: "",
      propertyStatus: { label: "", value: PROPERTY_STATUS.SALE, _id: "" },
      price: "",
      propertyType: { label: "", value: "", _id: "" },
      area: "",
      rooms: [],
      features: [],
      bedroomsAmount: "",
      bathroomsAmount: "",
      location: {
        name: "",
        displayName: "",
        city: "",
        country: "",
        state: "",
        addressType: "",
        lat: "",
        lon: "",
      },
      description: "",
      images: [],
      images_to_delete: [],
    },
    resolver: zodResolver(CreatePropertyValidationSchema),
  });

export default useCreatePropertyForm;
