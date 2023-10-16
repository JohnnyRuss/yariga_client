import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CreatePropertyValidationSchema = z.object({
  title: z.string().trim().toLowerCase().min(3),
  description: z.string().trim().min(10),
  propertyType: z.string().trim().min(1),
  price: z.number().min(1),
  location: z.object({
    type: z.string().trim().min(1),
    addresstype: z.string().trim().min(1),
    name: z.string().trim().min(1),
    display_name: z.string().trim().min(1),
    lat: z.string().trim().min(1),
    lon: z.string().trim().min(1),
  }),
  images: z.array(z.string().url()),
  new_images: z.array(z.string()),
});

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
        type: "",
        addresstype: "",
        name: "",
        display_name: "",
        lat: "",
        lon: "",
      },
      images: [],
      new_images: [],
    },
    resolver: zodResolver(CreatePropertyValidationSchema),
  });

export default useCreatePropertyForm;
