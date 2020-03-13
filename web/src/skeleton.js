const fs = require('fs')
const path = require('path')

const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

// webpack --config build/webpack.config.skeleton.js
const renderer = createBundleRenderer(path.join(__dirname, '../skeleton-dist/skeleton.json'), {
  template: fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf-8')
})

renderer.renderToString({}, (err, html) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(err)
  }
  fs.writeFileSync('index.html', html, 'utf-8')
})
