import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import htmx from "astro-htmx"
// https://astro.build/config
export default defineConfig({
  integrations: [preact() ,htmx()]
});