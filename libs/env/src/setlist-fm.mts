// src/env.mjs
import { z } from 'zod';

const envSchema = z.object({
  SETLIST_FM_API_KEY: z.string(),
  PORT: z.coerce.number().default(3333),
  LIMIT_PER_SECOND: z.coerce.number().default(16),
});

export const env = envSchema.parse(process.env);
