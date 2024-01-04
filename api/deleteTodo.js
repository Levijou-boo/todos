import TodoApi from './apiCore.js';

// 할 일 삭제 핸들러
export default async function deleteTodoHandler(req, res) {
  console.log('deleteTodoHandler');
  const todoApi = new TodoApi();
  const { id: todoId } = req.body; // 요청 본문에서 할 일 ID를 가져옴

  try {
    await todoApi.deleteTodo(todoId);
    return res.status(200).json({ message: '할 일 삭제 성공' });
  } catch (error) {
    console.error('할 일 삭제 오류:', error);
    return res.status(500).json({ error: '서버 오류' });
  }
}
