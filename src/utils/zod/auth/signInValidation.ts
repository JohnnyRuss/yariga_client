import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isValidPassword } from "utils/zod/helpers/customValidators";

const SignInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).refine(isValidPassword, {
    message: "Password should contain only latin letters and symbols ( . - _ )",
  }),
});

type SignInFormSchemaT = z.infer<typeof SignInFormSchema>;

export const useSignInForm = () =>
  useForm<SignInFormSchemaT>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

export default useSignInForm;
