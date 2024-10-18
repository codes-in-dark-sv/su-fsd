/** @type {import('next').NextConfig} */
module.exports = {
    typescript: {
      ignoreBuildErrors: true, // Disable TypeScript errors during build
    },
    eslint: {
      ignoreDuringBuilds: true, // Disable ESLint during build (if needed)
    },
};

