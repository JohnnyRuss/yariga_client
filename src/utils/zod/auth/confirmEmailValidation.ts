import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isNumeric } from "utils/zod/helpers/customValidators";

const ConfirmEmailFormSchema = z.object({
  pin: z.string().refine(isNumeric.validator, {
    message: isNumeric.message,
  }),
});

type ConfirmEmailFormSchemaT = z.infer<typeof ConfirmEmailFormSchema>;

export const useConfirmEmailForm = () =>
  useForm<ConfirmEmailFormSchemaT>({
    resolver: zodResolver(ConfirmEmailFormSchema),
    defaultValues: {
      pin: "",
    },
  });

export default useConfirmEmailForm;
