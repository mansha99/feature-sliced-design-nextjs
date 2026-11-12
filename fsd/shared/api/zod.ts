import { z } from 'zod';

// Generated directly from OpenAPI spec
export const createContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^[6-9][0-9]{9}$/, "Invalid mobile number"),
 });

export type CreateContactDTO = z.infer<typeof createContactSchema>;