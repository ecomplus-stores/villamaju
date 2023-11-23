const path = require('path')
const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')

module.exports = () => ({
  resolve: {
    alias: {
      './js/SearchEngine.js': path.resolve(__dirname, 'template/js/custom-js/html/SearchEngine.js'),
      
    }
  }
})