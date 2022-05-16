import requests from '@/api/requests'

const reqAccount = () => {
  return requests({
    url: '/account',
    method: 'get'
  })
}

const getEntries = () => {
  return requests({
    url: '/entries',
    method: 'get'
  })
}

// 发布文章
const reqWriting = (essayMessage) => {
  return requests({
    url: '/community/writing',
    method: 'post',
    data: {
      essayMessage
    }
  })
}




export {
  reqAccount,
  getEntries,
  reqWriting
}