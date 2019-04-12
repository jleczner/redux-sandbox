module.exports = function(api) {
	api.cache(true);

	const presets = [
		[
			"@babel/env",
			{
				targets: {
					edge: "17",
					firefox: "60",
					chrome: "67",
					safari: "11.1",
					node: "current"
				},
				useBuiltIns: "usage",
				corejs: '3.0.1'
			}
		],
		"@babel/preset-react"
	];

	return {
		presets
	}
};