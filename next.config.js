/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.weatherbit.io', 'www.metaweather.com', 'www.metaweather.com']
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@tremor/react'],
  },
}

module.exports = nextConfig
