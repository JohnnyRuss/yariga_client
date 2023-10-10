import { useCreatePropertyForm } from "utils/zod";
import { FileChangeEventT } from "interface/form";

export default function useCreatePropertyQuery() {
  const form = useCreatePropertyForm();

  const onFileChange: FileChangeEventT = async (event, fieldChangeEvent) => {
    const files = event.target.files;
    const filesArray = files ? Array.from(files) : null;

    if (!Array.isArray(filesArray) || !filesArray[0]) return;

    const readFile = (file: File) =>
      new Promise<string>((resolve, _) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = async (e) => {
          resolve(e.target?.result?.toString() || "");
        };
      });

    const filesBase64Array: string[] = await Promise.all(
      filesArray.map(async (file) => readFile(file))
    );

    fieldChangeEvent(filesBase64Array);
  };

  const onSubmit = form.handleSubmit(function (values) {
    console.log(values);
  });

  return { form, onSubmit, onFileChange };
}
