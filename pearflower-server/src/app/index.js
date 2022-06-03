const express = require('express')
const parser = require('body-parser')
const centerRouter = require('../router/center.router')
const communityRouter = require('../router/community.router')

const app = express()
// 解析前端传递过来的参数
app.use(parser.json())
app.use(parser.urlencoded({extended:true}))

// 个人中心相关接口
app.use('/api/center', centerRouter)
// 交流社区相关接口
app.use('/api/community', communityRouter)

module.exports = app;