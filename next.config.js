/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: true,
      },
      {
        source: "/admin",
        destination: "/test",
        permanent: true,
      },
      {
        source: "/shop",
        destination: "/orderdeal",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
