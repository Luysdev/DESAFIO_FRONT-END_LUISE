import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'image-cep' : "url('https://img.freepik.com/fotos-gratis/mapa-de-vista-superior-em-fundo-azul_23-2148786160.jpg?w=1380&t=st=1693357458~exp=1693358058~hmac=b6908df378e77ab3a50c3305f576e054553e8ef8cc6434440f2fcf2c078649b4')"
      },
    },
  },
  plugins: [],
}
export default config
