import requests from '@/api/requests'

const reqAccount = () => {
  return requests({
    url: '/account',
    method: 'get'
  })
}




export {
  reqAccount,
}