module.exports = (api) => {
	api.cache(true);
	const presets = ['babel-preset-expo'];
	const plugins = [
		[
			'module-resolver',
			{
				root: ['.'],
				extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
				alias: {
					'@assets': './assets',
					'@components': './components',
					'@core': './core',
					'@screens': './screens',
				},
			},
		],
	];

	return {
		presets,
		plugins,
	};
};
