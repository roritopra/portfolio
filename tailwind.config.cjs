/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			aspectRatio: {
				'4/3': '4 / 3'
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
