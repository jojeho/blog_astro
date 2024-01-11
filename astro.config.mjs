import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import htmx from "astro-htmx";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [preact(), htmx()],
  adapter: node({
   mode: "standalone"
   })
  ,

});