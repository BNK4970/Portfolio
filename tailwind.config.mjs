/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// dark
				'darkForeground': 'rgb(var(--color-foreground))',
				'darkBackground': 'rgb(var(--color-background))',

				'darkPrimary': 'rgb(var(--color-primary))',
				'darkSecondary': 'rgb(var(--color-secondary))',
				'darkAccent': 'rgb(var(--color-accent))',

				'darkSuccess': 'rgb(var(--color-accent))',
				'darkWarning': 'rgb(var(--color-accent))',
				'darkDanger': 'rgb(var(--color-accent))',
				// light
				'lightText': '#1a1a1a',
				'lightBackground': '#f0efef',
				'lightPrimary': '#460bda',
				'lightSecondary': '#c5b9d5',
				'lightAccent': '#3f285c',
			},
			fontSize: {
				sm: '0.800rem',
				base: '1rem',
				xl: '1.250rem',
				'2xl': '1.563rem',
				'3xl': '1.954rem',
				'4xl': '2.442rem',
				'5xl': '3.053rem',
			},
			fontFamily: {
				heading: 'Russo One',
				body: 'Poppins',
			},
			fontWeight: {
				normal: '400',
				bold: '700',
			},
		},
	},
	plugins: [],
}
