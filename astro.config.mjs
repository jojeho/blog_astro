import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import htmx from "astro-htmx";
import node from "@astrojs/node";
import netlify from '@astrojs/netlify';


export default defineConfig({
  output: "server",
  integrations: [preact(), htmx()],
  adapter: node({
   mode: "standalone"
   })
  ,
    adapter: netlify(),
});