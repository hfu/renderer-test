const render = require('mbgl-renderer').default
const style = require('../onyx-tapioca/style.json')
const fs = require('fs')

render(style, 512, 512, { zoom: 16, center: [7.59, 50.32] })
  .then(data => { fs.writeFileSync('test.png', data) })
