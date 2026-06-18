import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: { colors: {}, fontFamily: {} } },
  plugins: [],
}
export default config
