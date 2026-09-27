import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const __workspaceRoot = path.resolve(__dirname, "..");

/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack: {
		// Allow Turbopack to resolve hoisted workspace dependencies from the monorepo root.
		root: __workspaceRoot,
	},
	async redirects() {
		return [
			{ source: "/index1-onepage", destination: "/", permanent: true },
			{ source: "/index1dark-onepage", destination: "/", permanent: true },
			{ source: "/blog", destination: "/", permanent: true },
			{ source: "/blog-list", destination: "/", permanent: true },
			{ source: "/blog-details", destination: "/", permanent: true },
			{ source: "/shop", destination: "/services", permanent: true },
			{ source: "/cart", destination: "/services", permanent: true },
			{ source: "/checkout", destination: "/contact", permanent: true },
			{ source: "/product-details", destination: "/services", permanent: true },
			{ source: "/project-carousel", destination: "/projects", permanent: true },
			{ source: "/project-creative", destination: "/projects", permanent: true },
			{ source: "/project-details", destination: "/projects", permanent: true },
			{ source: "/service-details", destination: "/services", permanent: true },
			{ source: "/team-profile", destination: "/team", permanent: true },
			{ source: "/pricing", destination: "/contact", permanent: true },
		];
	},
};

export default nextConfig;
