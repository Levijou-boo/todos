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
//     "title": "우리는 소리없는 부엉이요 발자국 없는 범이다.",
//     "order": 3
//   }
// }).then(function (response) {
//   console.log(response);
// });

// ; (async () => {
//   const x = await axios({
//     method: 'get',
//     url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
//     headers: {
//       'content-type': 'application/json',
//       'apikey': 'KDT7_GrZ1eYBo',
//       'username': 'KDT7_HamJiHun'
//     }
//   }).then(function (response) {
//     return response.data;
//   });

//   const idsToKeep = new Set(); // 중복을 제거하고 유지할 id 값을 저장할 Set
//   const seenOrders = new Set(); // 이미 처리된 order 값을 추적할 Set

//   x.forEach(item => {
//     if (seenOrders.has(item.order)) {
//       idsToKeep.add(item.id);
//     } else {
//       seenOrders.add(item.order);
//     }
//   });

//   const filteredData = Array.from(idsToKeep);
//   axios({
//     method: 'delete',
//     url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/deletions',
//     headers: {
//       'content-type': 'application/json',
//       'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
//       'username': 'KDT7_HamJiHun'
//     },
//     data: {
//       "todoIds": filteredData
//     }
//   }).then(function (response) {
//     console.log(response);
//   });
// })();


// const x = axios({
//   method: 'get',
//   url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
//   headers: {
//     'content-type': 'application/json',
//     'apikey': 'KDT7_GrZ1eYBo',
//     'username': 'KDT7_HamJiHun'
//   }
// }).then(function (response) {
//   return response.data;
// });


// axios({
//   method: 'delete',
//   url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/deletions',
//   headers: {
//     'content-type': 'application/json',
//     'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
//     'username': 'KDT7_HamJiHun'
//   },
//   data: {
//     "todoIds": [
//       "mnIwaAPIAE1ayQmqekiR",
//       "tMzPImGoWtRdJ6yyVv2y",
//       "GHrvr3LaPx1g7y2sNuaC",
//       "Rq8BebKihCgteHHhMIRS"
//     ]
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
