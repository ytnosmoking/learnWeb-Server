import request from '@/utils/request'

import Cookies from 'js-cookie'

export function sendAjax (url, data = {}, method = 'post') {
  console.log(`url===` + url)
  console.log(`data===` + JSON.stringify(data))
  console.log(`method===` + method)
  return request({
    url,
    method,
    data
  })
}

const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken () {
  return Cookies.remove(TokenKey)
}
