/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
            //pathname: '/account123/**',
          },
          {
            protocol: 'https',
            hostname: 'cdn.gulte.com'
          },
          {
            protocol: 'http',
            hostname: 'localhost'
          },
          {
            protocol: 'https',
            hostname: 'lumiere-a.akamaihd.net'
          },
          {
            protocol: 'https',
            hostname: 'images2.alphacoders.com'
          }
        ],
      },
}

// code found in nextjs
// https://nextjs.org/docs/messages/next-image-unconfigured-host

module.exports = nextConfig
