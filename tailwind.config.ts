import type { Config } from 'tailwindcss';

/**
 * Configuración de Tailwind CSS v4
 * Nota: Tailwind v4 usa CSS-first, pero mantenemos esta configuración
 * para compatibilidad y para definir el content path
 */
const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './design-system/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Los tokens están definidos en variables.css
      // Esta configuración es principalmente para el content path
    },
  },
  plugins: [],
};

export default config;

