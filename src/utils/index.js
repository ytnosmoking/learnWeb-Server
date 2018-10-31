export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
}

export function config2Obj (params) {
  return JSON.parse(params)
}

export function getDomById (id) {
  return document.getElementById(id)
}
