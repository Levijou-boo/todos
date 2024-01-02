import axios from "axios";

class TodoApi {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
      headers: {
        'content-type': 'application/json',
        'apikey': 'KDT7_GrZ1eYBo',
        'username': 'KDT7_HamJiHun'
      },
    });
  }

  // 할 일 목록 가져오기
  getTodos() {
    return this.instance.get('/')
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  // 할 일 삭제
  deleteTodo(todoId) {
    return this.instance.delete(`/${todoId}`)
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  // 모든 할 일 삭제
  deleteAllTodos() {
    return this.instance.delete('/deletions')
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  // 할 일 추가
  postTodo(newTodo) {
    return this.instance.post('/', newTodo)
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  // 할 일 수정
  putTodo(todoId, updatedTodo) {
    return this.instance.put(`/${todoId}`, updatedTodo)
      .then(response => response.data)
      .catch(error => console.error(error));
  }

  // 할 일 순서 변경
  reorderTodos(todoIds) {
    return this.instance.post('/reorder', { todoIds })
      .then(response => response.data)
      .catch(error => console.error(error));
  }
}

export default TodoApi;
