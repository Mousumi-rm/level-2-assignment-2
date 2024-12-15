import { z } from "zod";

const carSchema = z.object({
  brand: z.string(),
  model: z.string(),
    year: z
    .number()
    .int()
    .gte(1886, "Year must be 1886 or later") // Minimum year is 1886
    .lte(new Date().getFullYear() + 1, "Year cannot be in the distant future"), // Year must be realistic
  price: z.number().positive(), // Positive number
  category: z.enum([
    "Sedan",
    "SUV",
    "Truck",
    "Coupe",
    "Convertible",
  
  ]), // Restrict to predefined categories
  description: z.string().optional().default("No description provided"),
  quantity: z.number().int().gte(0, "Quantity must be zero or a positive integer"), // Non-negative integer
  inStock: z.boolean(), // Boolean field
});


export default carSchema;

// const carSchema = z.object({
//   brand: z.string().min(1),
//   model: z.string().min(1),
//   year: z.number().int(),
//   price: z.number().positive(),
//   category: z.enum(["Sedan", "SUV", "Truck", "Coupe", "Convertible"]),
//   description: z.string().optional().default("No description provided"),
//   quantity: z.number().int().min(0),
//   inStock: z.boolean().default(true), 
// });

///////////////////////////////////////////////////
