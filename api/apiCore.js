import axios from "axios";



// class TodoApi {
//   constructor() {
//     this.urls = ['https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos']
//     this.instance = axios.create({
//       baseURL: ,
//       headers: {
//         'content-type': 'application/json',
//         'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
//         'username': 'KDT7_HamJiHun'
//       },
//     });
//   }

//   getTodos() {
//     return this.instance.get('/')
//       .then(response => response.data)
//       .catch(error => console.error(error));
//   }

//   deleteTodos(filteredData) {
//     return this.instance.delete('/deletions', {
//       data: {
//         "todoIds": filteredData
//       }
//     })
//       .then(response => response.data)
//       .catch(error => console.error(error));
//   }

//   postTodos(newTodo) {
//     return this.instance.post('/', newTodo)
//       .then(response => response.data)
//       .catch(error => console.error(error));
//   }

//   putTodos(id, newTodo) {
//     return this.instance.put(`/${id}`, newTodo)
//       .then(response => response.data)
//       .catch(error => console.error(error));
//   }
// }
