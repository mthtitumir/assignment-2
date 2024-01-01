import { z } from "zod";

const fullNameSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
});
const updateFullNameSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  lastName: z.string().min(1).max(20).optional(),
});

const addressSchema = z.object({
  street: z.string(),
  city: z.string().min(1),
  country: z.string().min(1),
});
const updateAddressSchema = z.object({
  street: z.string().optional(),
  city: z.string().min(1).optional(),
  country: z.string().min(1).optional(),
});

export const orderSchema = z.object({
  productName: z.string().min(1),
  price: z.number().positive(),
  quantity: z.number().positive(),
});
export const updateOrderSchema = z.object({
  productName: z.string().min(1).optional(),
  price: z.number().positive().optional(),
  quantity: z.number().positive().optional(),
});

export const userValidationSchema = z.object({
  userId: z.number().positive(),
  username: z.string().min(1).max(15),
  password: z.string().min(6).max(20),
  fullName: fullNameSchema,
  age: z.number().positive(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string().min(1)),
  address: addressSchema,
  orders: z.array(orderSchema),
});
export const updateUserValidationSchema = z.object({
  userId: z.number().positive().optional(),
  username: z.string().min(1).max(15).optional(),
  password: z.string().min(6).max(20).optional(),
  fullName: updateFullNameSchema,
  age: z.number().positive().optional(),
  email: z.string().email().optional(),
  isActive: z.boolean().optional(),
  hobbies: z.array(z.string().min(1)).optional(),
  address: updateAddressSchema,
  orders: z.array(updateOrderSchema),
});