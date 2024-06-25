import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // Tambahkan variabel server jika diperlukan
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
  },

  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    // Tambahkan variabel runtime lainnya jika diperlukan
  },
});

module.exports = { env };
