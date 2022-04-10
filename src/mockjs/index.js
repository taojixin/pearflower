import Mock from 'mockjs'
// const Mock = require('mockjs')

Mock.mock('/api/account', 'get',{
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

// Mock.setup({
//   timeout: "500-1000",
// });
