// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import compressor from 'astro-compressor';
import partytown from '@astrojs/partytown';
import { purgecss } from '@zokki/astro-purgecss';

export default defineConfig({
  integrations: [react(), compressor(), partytown(),purgecss()],
});