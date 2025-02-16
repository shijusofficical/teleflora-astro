// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

import playformCompress from '@playform/compress';

export default defineConfig({
  integrations: [react(), partytown(), playformCompress(),(await import("@playform/compress")).default({
    CSS: true,
    HTML: true,
    Image: true,
    JavaScript: true,
    SVG: true,
  })],
});