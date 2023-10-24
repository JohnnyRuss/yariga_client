import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ForgotPasswordFormSchema = z.object({
  email: z.string().email(),
});

type ForgotPasswordFormSchemaT = z.infer<typeof ForgotPasswordFormSchema>;

export const useForgotPasswordForm = () =>
  useForm<ForgotPasswordFormSchemaT>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

export default useForgotPasswordForm;
