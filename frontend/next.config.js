module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
}

// next.config.js
const withOptimizedImages = require('next-optimized-images');
module.exports = withOptimizedImages({
  optimizeImages: false,
});
