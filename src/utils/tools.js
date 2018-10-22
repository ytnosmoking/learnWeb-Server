import request from '@/utils/request'

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
