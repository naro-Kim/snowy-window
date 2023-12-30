import type { Config } from 'tailwindcss';

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
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			animation: {
				fade: 'fadeIn 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s',
			},
			keyframes: {
				fadeIn: {
					from: {
						transform: 'translate(0, 100%)', 
					},
					to: {
						transform: 'translate(0, 0)', 
					}
				},
			},
		},
	},
	plugins: [],
};
export default config;
