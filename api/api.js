import axios from "axios";

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// axios({
//   method: 'post',
//   url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
//   headers: {
//     'content-type': 'application/json',
//     'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
//     'username': 'KDT7_HamJiHun'
//   },
//   data: {
//     "title": "KDT 과정 설계 미팅",
//     "order": 1
//   }
// }).then(function (response) {
//   console.log(response);
// });

export default function getTodo() {
  return axios({
    method: 'get',
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo',
      'username': 'KDT7_HamJiHun'
    }
  }).then(function (response) {
    return response.data;
  });
}

