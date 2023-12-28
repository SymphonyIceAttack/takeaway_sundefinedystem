/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/orderingInterface",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
