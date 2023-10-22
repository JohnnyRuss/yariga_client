import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PropertyStatus } from "interface/db/properties.types";

const isNumeric = {
  validator: (data: string): boolean => /^[0-9]*$/.test(data),
  message: "please enter the number",
};

const greaterThanZero = {
  validator: (data: string): boolean => parseFloat(data) > 0,
  message: "please enter number above 0",
};

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
      display_name: z.string().trim().min(1),
      city: z.string().trim().toLowerCase().min(1),
      country: z.string().trim().toLowerCase().min(1),
      state: z.string().trim().toLowerCase(),
      addresstype: z.string().trim().toLowerCase().min(1),
      lat: z.string().trim().min(1),
      lon: z.string().trim().min(1),
    }),
    description: z.string().trim().min(10),
    images: z.array(z.string().url()),
    new_images: z.array(z.string()),
    images_to_delete: z.array(z.string().url()),
  })
  .refine(
    (data) => {
      const existingImages = Array.isArray(data.images) && data.images[0];
      const hasNewImages = Array.isArray(data.new_images) && data.new_images[0];

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
      propertyStatus: { label: "", value: PropertyStatus.SALE, _id: "" },
      price: "",
      propertyType: { label: "", value: "", _id: "" },
      area: "",
      rooms: [],
      features: [],
      bedroomsAmount: "",
      bathroomsAmount: "",
      location: {
        name: "",
        display_name: "",
        city: "",
        country: "",
        state: "",
        addresstype: "",
        lat: "",
        lon: "",
      },
      description: "",
      images: [],
      new_images: [],
      images_to_delete: [],
    },
    resolver: zodResolver(CreatePropertyValidationSchema),
  });

export default useCreatePropertyForm;
