// next.config.js
const withOptimizedImages = require('next-optimized-images');
module.exports = withOptimizedImages({
  optimizeImages: false,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en",
    localeDetection: false,
  },
});
