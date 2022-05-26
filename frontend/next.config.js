// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    localeDetection: true,
  },
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/'
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
})
