const {getAll, getTagged} = require('./controller')

const express = require('express')
const router = express.Router()

router.route('/')
.get(getAll)

router.route('/profile/:tag')
.get(getTagged)



module.exports = {router}