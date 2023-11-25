import { useAppDispatch } from "store/hooks";
import { useNavigate } from "react-router-dom";
import { useCreatePropertyForm } from "utils/zod";
import { FileChangeEventT } from "interface/components/form.types";

import FileControl from "utils/FileControl";
import { isBase64Str } from "utils/zod/helpers/customValidators";
import { createPropertyFormActions } from "store/reducers/createPropertyForm.reducer";

export default function useCreatePropertyQuery(isUpdateProcess: boolean) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useCreatePropertyForm();

  const onFileChange: FileChangeEventT = async (event, fieldChangeEvent) => {
    const files = event.target.files;
    const filesArray = files ? Array.from(files) : null;

    if (!filesArray || !filesArray[0]) return;

    const filesBase64Array: string[] =
      await FileControl.convertMultipleFilesToBase64Str(filesArray);

    fieldChangeEvent([...filesBase64Array, ...(form.watch("images") || [])]);
  };

  const onRemoveFile = (fileUrl: string) => {
    const filteredOutAssets = form
      .watch("images")
      .filter((asset) => asset !== fileUrl);

    const imagesToDelete = form.watch("images_to_delete") || [];

    if (isBase64Str(fileUrl)) {
      form.setValue("images", filteredOutAssets);
    } else {
      form.setValue("images", filteredOutAssets);
      form.setValue("images_to_delete", [...imagesToDelete, fileUrl]);
    }
  };

  const onSubmit = form.handleSubmit(function (values) {
    if (isUpdateProcess) {
      const propertyId = new URLSearchParams(window.location.search).get(
        "property"
      );

      if (!propertyId) return navigate(-1);

      dispatch(
        createPropertyFormActions.updateProperty({
          data: values,
          propertyId,
        })
      );
    } else dispatch(createPropertyFormActions.createProperty(values));
  });

  return { form, onSubmit, onFileChange, onRemoveFile };
}
