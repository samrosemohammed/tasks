import z from "zod";

export const checkOutFromSchema = z.object({
  firstName: z
    .string()
    .min(3, "First Name should be greater than 3 characters"),
  lastName: z.string().min(3, "Last Name should be greater than 3 characters"),
  email: z.string(),
  address: z.string().min(1, "Address shoud be greater than 1 characters"),
});

export type CheckOutFormData = z.infer<typeof checkOutFromSchema>;

export const adminLoginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(3, "Password must be greater than 3 character"),
});
export type AdminLoginFormData = z.infer<typeof adminLoginSchema>;
