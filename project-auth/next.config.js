/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    env: {
    customKey: '01724785381',
  },
  images: {
    domains: ['mydomain.com', 'localhost']
  }
}

module.exports = nextConfig
