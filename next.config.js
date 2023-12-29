/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: true,
        basePath: false,
      },
      {
        source: "/admin",
        destination: "/takeoutData",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
