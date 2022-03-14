// tailwind.config.js
import { plugin } from 'twrnc';
import { Colors } from './theme';

export const content = ['./**/*.{html,js,jsx,ts,tsx}'];

export const theme = {
	extend: {
		colors: {
			theme: Colors,
		},
	},
};

export const plugins = [
	plugin(({ addUtilities }) => {
		addUtilities({
			'btn-primary': `px-4 py-3 bg-theme-green rounded`,

			'flex-cc': `flex-row justify-center items-center`,
			'flex-cs': `flex-row justify-center items-start`,
			'flex-ce': `flex-row justify-center items-end`,

			'flex-bc': `flex-row justify-between items-center`,
			'flex-bs': `flex-row justify-between items-start`,
			'flex-be': `flex-row justify-between items-end`,

			'flex-sc': `flex-row justify-start items-center`,
			'flex-ss': `flex-row justify-start items-start`,
			'flex-se': `flex-row justify-start items-end`,

			'flex-ec': `flex-row justify-end items-center`,
			'flex-es': `flex-row justify-end items-start`,
			'flex-ee': `flex-row justify-end items-end`,

			'flex-vc': `flex-row justify-evenly items-center`,
			'flex-vs': `flex-row justify-evenly items-start`,
			'flex-ve': `flex-row justify-evenly items-end`,

			'flex-ac': `flex-row justify-around items-center`,
			'flex-as': `flex-row justify-around items-start`,
			'flex-ae': `flex-row justify-around items-end`,

			row: `flex-row`,
			col: `flex-col`,

			full: `w-full h-full`,
		});
	}),
];
