import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://mia703.github.io",
  base: "/portfolio",
  integrations: [react()]
});