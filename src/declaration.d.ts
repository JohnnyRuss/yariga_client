declare module "react-tiny-link";

declare module "*.jpeg";
declare module "*.jpg";
declare module "*.webp";
declare module "*.png";
declare module "*.svg";

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
