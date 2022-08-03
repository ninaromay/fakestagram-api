const {getAll} = require('./controller')

const express = require('express')
const router = express.Router()

router.route('/')
.get(getAll)

module.exports = {router}