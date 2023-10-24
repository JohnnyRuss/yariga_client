import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  isValidPassword,
  isLatinLetters,
} from "utils/zod/helpers/customValidators";

const SignUpFormSchema = z
  .object({
    username: z
      .string()
      .min(2)
      .max(20)
      .trim()
      .toLowerCase()
      .refine(isLatinLetters, {
        message: "username must contain only latin letters",
      }),
    email: z.string().email(),
    password: z.string().min(6).refine(isValidPassword, {
      message:
        "Password should contain only latin letters and symbols ( . - _ )",
    }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Confirm password must match password",
    path: ["confirm_password"],
  });

type SignUpFormSchemaT = z.infer<typeof SignUpFormSchema>;

export const useSignUpForm = () =>
  useForm<SignUpFormSchemaT>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

export default useSignUpForm;
