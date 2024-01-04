import TodoApi from './apiCore.js';

export default async function putTodoHandler(req, res) {
  const todoApi = new TodoApi();
  const todo = req.body.data.todo; // 전체 데이터를 todo에 할당
  const id = todo.id;
  delete todo.id; // todo 객체에서 id 속성 삭제

  try {
    await todoApi.putTodo(id, todo);
    return res.status(200).json({ message: '할 일 추가 성공' });
  } catch (error) {
    console.error('할 일 목록 가져오기 오류:', error);
    return res.status(500).json({ error: '서버 오류' });
  }
}

