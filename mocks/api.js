const path = require('path')
const express = require('express')
const cors = require('cors')

const api = express()

api.use(express.json())
api.use('/img', express.static(path.join(__dirname, 'img')))
api.use(cors())

api.listen(9000, () => {
  console.log('listening on 9000')
})
