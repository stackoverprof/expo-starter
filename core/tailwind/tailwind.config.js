// tailwind.config.js
const { plugin } = require('twrnc');

module.exports = {
	content: ['./**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				green: '#00AB55',
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'btn-primary': `px-4 py-3 bg-green rounded`,

				'flex-cc': `flex justify-center items-center`,
				'flex-cs': `flex justify-center items-start`,
				'flex-ce': `flex justify-center items-end`,

				'flex-bc': `flex justify-between items-center`,
				'flex-bs': `flex justify-between items-start`,
				'flex-be': `flex justify-between items-end`,

				'flex-sc': `flex justify-start items-center`,
				'flex-ss': `flex justify-start items-start`,
				'flex-se': `flex justify-start items-end`,

				'flex-ec': `flex justify-end items-center`,
				'flex-es': `flex justify-end items-start`,
				'flex-ee': `flex justify-end items-end`,

				'flex-vc': `flex justify-evenly items-center`,
				'flex-vs': `flex justify-evenly items-start`,
				'flex-ve': `flex justify-evenly items-end`,

				'flex-ac': `flex justify-around items-center`,
				'flex-as': `flex justify-around items-start`,
				'flex-ae': `flex justify-around items-end`,

				col: `flex-col`,

				full: `w-full h-full`,
			});
		}),
	],
};
