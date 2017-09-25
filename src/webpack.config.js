const path = {
  src: './app/js'
}

module.exports = {
  entry: `${path.src}/app.js`,
  output: {
    filename: `${path.src}/app.bundle.js`
  }
}
