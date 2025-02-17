// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import compressor from 'astro-compressor';
import partytown from '@astrojs/partytown';

import sentry from '@sentry/astro';

export default defineConfig({
  integrations: [react(), compressor(), partytown(), sentry({
    dsn: "https://c34f54ee5c292be9496bdf39b768b764@o4508098119335936.ingest.de.sentry.io/4508830116479056",
    sourceMapsUploadOptions: {
      project: "teleflora-poc",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    },
  }),],
});