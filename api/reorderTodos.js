import TodoApi from './apiCore.js';

export default async function putTodoHandler(req, res) {
  const todoApi = new TodoApi();
  const todoIds = req.body.data.todoList; // 'todoIds'에 할당
  console.log(todoIds);

  try {
    await todoApi.reorderTodos(todoIds);
    return res.status(200).json({ message: '할 일 순서 변경 성공' });
  } catch (error) {
    console.error('할 일 목록 가져오기 오류:', error);
    return res.status(500).json({ error: '서버 오류' });
  }
}
