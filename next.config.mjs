/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "skillicons.dev",
			},
			{
				protocol: "https",
				hostname: "s3.amazonaws.com",
			},
		],
		dangerouslyAllowSVG: true,
	},
};

export default nextConfig;
