import Mock from 'mockjs'
// const Mock = require('mockjs')

let Random = Mock.Random
// 随机生成一个常见的中文姓名。
Random.cname()
// 随机生成日期
Random.date()
// 随机生成一句中文标题
Random.ctitle()
// 随机生成一段中文文本
Random.cparagraph()
// 生成一段随机的 Base64 图片编码。
Random.dataImage()


Mock.mock('/api/account', 'get', {
  code: 0,
  msg: 'success',
  data: {
    'account': [
      { text: '我的账户', path: 'account' },
      { text: '我的会员', path: 'vip' },
      { text: '支付密码', path: 'paypassword' },
      { text: '重置密码', path: 'resetpassword' }
    ]
  }
})
Mock.mock('/api/entries', 'get', {
  code: 0,
  msg: 'success',
  data: {
    'entries': [
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
      {
        'id|1-999': 0,
        name: "@cname",
        data: '@date',
        title: '@ctitle',
        content: '@cparagraph',
        "browse|20-999": 125,
        "good|1-999": 1231,
        "comments|1-99": 0,
        imagesurl: '@dataImage'
      },
    ]
  }
})

// 设置延迟
// Mock.setup({
//   timeout: "500-1000",
// });
