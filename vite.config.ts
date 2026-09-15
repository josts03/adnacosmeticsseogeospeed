import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({isSsrBuild}) => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Strežniški build (za prerender) ne potrebuje kopije public/.
      copyPublicDir: !isSsrBuild,
    },
    ssr: {
      // react-helmet-async je CJS z ESM ovojem; v Node ESM njegovi named exporti
      // niso zanesljivo vidni, zato ga v strežniški bundle vključimo neposredno.
      noExternal: ['react-helmet-async'],
    },
    server: {
      // Hot Module Replacement can be turned off by setting DISABLE_HMR=true.
      // File watching is disabled when HMR is off to save CPU.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
