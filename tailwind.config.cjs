/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			gridColumnStart: {
				'4' : '4'
			},
			gridColumnEnd: {
				'12' : '12'
			},
			gridTemplateColumns: {
				'14': 'repeat(14, minmax(0, 1fr))',
			},
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
	screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		maxXs: {'max': '480px'},
		maxSm: {'max': '640px'},
		maxMd: {'max': '768px'},
		maxLg: {'max': '1024px'},
		maxXl: {'max': '1280px'}
	},
	plugins: [
		require('flowbite/plugin')
	],
}
