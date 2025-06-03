import { z } from 'zod';

export const convertSchema = z.object({
  value: z.coerce.number().min(0, 'Value must be non-negative'),
  fromUnit: z.string(),
  toUnit: z.string(),
});
