import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isNumeric } from "utils/zod/helpers/customValidators";

const EditProfileSchema = z.object({
  email: z.string().email(),

  phone: z.string().refine(isNumeric.validator, {
    message: isNumeric.message,
  }),

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
});

type EditProfileFormT = z.infer<typeof EditProfileSchema>;

const useEditProfileForm = () =>
  useForm<EditProfileFormT>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      email: "",
      phone: "",
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
    },
  });

export { type EditProfileFormT, useEditProfileForm };
