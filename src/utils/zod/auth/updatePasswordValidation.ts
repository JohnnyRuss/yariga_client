import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isValidPassword } from "utils/zod/helpers/customValidators";

const UpdatePasswordFormSchema = z
  .object({
    new_password: z.string().min(6).refine(isValidPassword, {
      message:
        "Password should contain only latin letters and symbols ( . - _ )",
    }),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Confirm password must match password",
    path: ["confirm_password"],
  });

type UpdatePasswordFormSchemaT = z.infer<typeof UpdatePasswordFormSchema>;

export const useUpdatePasswordForm = () =>
  useForm<UpdatePasswordFormSchemaT>({
    resolver: zodResolver(UpdatePasswordFormSchema),
    defaultValues: {
      new_password: "",
      confirm_password: "",
    },
  });

export default useUpdatePasswordForm;
