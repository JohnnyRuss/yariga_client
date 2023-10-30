export interface CustomButtonPropsT {
  type?: "button" | "submit";
  title: string;
  bgColor?: string;
  color?: string;
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export interface ProfilePropsT {
  type: string;
  name: string;
  avatar: string;
  email: string;
  properties: Array | undefined;
}

export interface PropertyPropsT {
  _id: string;
  title: string;
  description: string;
  location: string;
  price: string;
  photo: string;
  creator: string;
}

export interface FormPropsT {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  propertyImage: { name: string; url: string };
}
