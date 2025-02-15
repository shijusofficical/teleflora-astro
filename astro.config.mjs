// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import compressor from 'astro-compressor';
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [react(), compressor(), partytown()],
});