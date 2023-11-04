import { useAppDispatch } from "store/hooks";
import { useCreatePropertyForm } from "utils/zod";
import { FileChangeEventT } from "interface/components/form";

import FileControl from "utils/FileControl";
import { createPropertyFormActions } from "store/reducers/createPropertyForm.reducer";

export default function useCreatePropertyQuery() {
  const dispatch = useAppDispatch();

  const form = useCreatePropertyForm();

  const onFileChange: FileChangeEventT = async (event, fieldChangeEvent) => {
    const files = event.target.files;
    const filesArray = files ? Array.from(files) : null;

    if (!Array.isArray(filesArray) || !filesArray[0]) return;

    const filesBase64Array: string[] =
      await FileControl.convertMultipleFilesToBase64Str(filesArray);

    fieldChangeEvent(filesBase64Array);
  };

  const onSubmit = form.handleSubmit(function (values) {
    dispatch(createPropertyFormActions.createProperty(values));
  });

  return { form, onSubmit, onFileChange };
}
