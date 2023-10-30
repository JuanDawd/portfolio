import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				mont: ['var(--font-mont)', ...fontFamily.sans],
			},
			colors: {
				dark: '#1b1b1b',
				light: '#f5f5f5',
				primary: '#B63E96',
				primaryDark: '#58E6D9',
			},
		},
	},
	plugins: [],
}
export default config
