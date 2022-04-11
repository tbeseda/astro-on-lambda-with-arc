import { defineConfig } from 'astro/config';
import awsAdapter from 'astro-lambda-adapter';

export default defineConfig({
  adapter: awsAdapter(),
  outDir: './server/dist',
});
