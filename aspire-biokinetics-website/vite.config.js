// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // <-- Import the new plugin

export default defineConfig({
  // --- FIX WAS MADE IN THE PLUGINS ARRAY ---
  plugins: [react(), tailwindcss()], // <-- Add the plugin here
});
