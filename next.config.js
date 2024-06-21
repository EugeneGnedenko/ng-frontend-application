/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
	distDir: 'dist',
	reactStrictMode: true,

	images: {
		// 1 week
		minimumCacheTTL: 1000 * 60 * 60 * 24 * 7,
		domains: ['cdn-staging.nodeguardians.com'],
		deviceSizes: [660, 900, 1200, 1600, 1800]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,

			use: ['@svgr/webpack']
		});

		return config;
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/quests',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
