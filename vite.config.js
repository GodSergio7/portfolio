import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Año del build: el mismo en el HTML prerenderizado y en el navegador
  // mientras React se engancha (ver Footer.jsx)
  define: {
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
  build: {
    rollupOptions: {
      // Dos páginas: la web y la página 404 que sirve Vercel
      input: {
        main: 'index.html',
        notFound: '404.html',
      },
    },
  },
  // Build de servidor (prerenderizado): se empaquetan también las
  // dependencias para no depender de cómo exporta cada una a Node
  ssr: {
    noExternal: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Bootstrap 5.3 aún usa sintaxis de Sass marcada como obsoleta
        // (@import, funciones globales…). Los avisos son del código de
        // Bootstrap, no del nuestro, así que se silencian.
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
      },
    },
  },
})
