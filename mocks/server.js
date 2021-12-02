const { setupServer } = require('msw/node')
const { handlers } = require('./handlers')

exports.server = setupServer(...handlers)
