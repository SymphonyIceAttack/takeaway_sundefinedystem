/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/takeoutData",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
