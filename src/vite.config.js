import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options'; // Sesuaikan path ini dengan lokasi file quasar-user-options.js Anda

export default defineConfig({
  plugins: [
    vue(),
    Quasar(quasarUserOptions), // Gunakan konfigurasi Quasar
  ],
});
