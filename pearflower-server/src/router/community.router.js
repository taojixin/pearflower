const express = require('express')
const communityRouter = express.Router()

const {
  writEssay,
} = require('../controller/community.controller')

communityRouter.post('/writing', writEssay)

module.exports = communityRouter;