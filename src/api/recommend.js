import jsonp from 'common/js/jsonp'
import { commonParams, options } from './config'
import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNowCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList () {
  const url = 'http://www.superdev.top/music/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    format: 'json',
    platform: 'yqq.json',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random()
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

export function getSongList (disstid) {
  const url = 'http://www.superdev.top/music/api/getSongList'
  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    urf8: 1,
    onlysong: 0,
    format: 'json',
    platform: 'yqq.json',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 67232076
  })
  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
