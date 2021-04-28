import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

let simpleInstance = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'cache-control': 'no-cache',
    'Pragma': 'no-cache'
  }
})
simpleInstance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.interceptors.request.use = simpleInstance.interceptors.request.use;

simpleInstance.interceptors.response.use(function (response) {
  if (response.data) {
    return response.data;
  } else {
    return Promise.reject(response.data)
  }
}, function (error) {
  return Promise.reject(error)
})

export default {
  rest:simpleInstance
}
