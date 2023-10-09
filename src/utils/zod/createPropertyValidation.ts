import z from "zod";

const createPropertyValidation = z.object({
  title: z.string(),
  description: z.string(),
  propertyType: z.string(),
  price: z.string(),
  location: z.string(),
  image: z.string().url(),
  new_image: z.string(),
});

export default createPropertyValidation;
