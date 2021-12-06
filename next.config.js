module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://tailwindui.com'],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config
  },
}
