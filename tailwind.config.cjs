/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
				'1/1': '1 / 1',
				'0/0': '0 / 0'
			},
			maxWidth: {
				'1/4': '25%',
				'1/3': '30%',
				'1/2': '50%',
				'1/5': '55%',
				'2/3': '60%',
				'3/4': '75%',
				'4/5': '80%'
			}	
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
