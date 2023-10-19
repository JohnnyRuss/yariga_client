import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CreatePropertyValidationSchema = z
  .object({
    title: z.string().trim().toLowerCase().min(3),
    description: z.string().trim().min(10),
    propertyType: z.string().trim().min(1),
    price: z.number().min(1),
    location: z.object({
      addresstype: z.string().trim().min(1),
      name: z.string().trim().min(1),
      display_name: z.string().trim().min(1),
      lat: z.string().trim().min(1),
      lon: z.string().trim().min(1),
    }),
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
      description: "",
      propertyType: "",
      price: NaN,
      location: {
        addresstype: "",
        name: "",
        display_name: "",
        lat: "",
        lon: "",
      },
      images: [],
      new_images: [],
      images_to_delete: [],
    },
    resolver: zodResolver(CreatePropertyValidationSchema),
  });

export default useCreatePropertyForm;
