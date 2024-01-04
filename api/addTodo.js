import TodoApi from './apiCore.js';

export default async function addTodoHandler(req, res) {
  const todoApi = new TodoApi();
  const todo = req.body.data.todo;
  try {
    const resTodo = await todoApi.postTodo(todo);
    return res.status(200).json({ message: '할 일 추가 성공' });
  } catch (error) {
    console.error('할 일 목록 가져오기 오류:', error);
    return res.status(500).json({ error: '서버 오류' });
  }
}

