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




export {
  reqAccount,
  getEntries
}