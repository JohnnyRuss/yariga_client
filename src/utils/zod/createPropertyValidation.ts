import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const CreatePropertyValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  propertyType: z.string(),
  price: z.string(),
  location: z.string(),
  images: z.array(z.string().url()),
  new_images: z.array(z.string()),
});

const useCreatePropertyForm = () =>
  useForm<z.infer<typeof CreatePropertyValidationSchema>>({
    defaultValues: {
      title: "",
      description: "",
      propertyType: "",
      price: "",
      location: "",
      images: [],
      new_images: [],
    },
    resolver: zodResolver(CreatePropertyValidationSchema),
  });

export default useCreatePropertyForm;
