import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    format: 'json',
    needNowCode: 1
  })
  return jsonp(url, data, options)
}

export function search (query, page, zhida, perpage) {
  const url = debug ? '/api/search' : 'https://www.superdev.top/music/api/search'
  const data = Object.assign({}, commonParams, {
    w: query,
    p: page,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage,
    n: perpage,
    remoteplace: 'txt.mqq.all',
    uid: 0,
    needNewCode: 1,
    platform: 'h5',
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  }).catch(() => {
    return Promise.reject(new Error('api error'))
  })
}
