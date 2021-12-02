const path = require('path')
const fs = require('fs')
const { rest } = require('msw')

function getImage(req, res, ctx) {
  const imageBuffer = fs.readFileSync(
    path.resolve(__dirname, 'img', 'logo.png'),
  )
  return res(
    ctx.set('Content-Length', imageBuffer.byteLength.toString()),
    ctx.set('Content-Type', 'image/png'),
    ctx.body(imageBuffer),
  )
}

exports.handlers = [
  rest.get('http://localhost:9000/img/*', getImage),
]
