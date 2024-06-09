/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "s3.amazonaws.com",
			},
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
			},
		],
		// dangerouslyAllowSVG: true,
	},
};

export default nextConfig;
