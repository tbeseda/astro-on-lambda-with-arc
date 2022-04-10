import { defineConfig } from 'astro/config';
import awsAdapter from './aws-adapter/dist/index.js';

export default defineConfig({
  adapter: awsAdapter(),
  outDir: './server/dist',
});
