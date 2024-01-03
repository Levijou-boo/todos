import TodoApi from './apiCore.js';

export default async function getTodosHandler(req, res) {
  const todoApi = new TodoApi();

  try {
    const todos = await todoApi.getTodos();
    res.status(200).json(todos);
    return
  } catch (error) {
    console.error('할 일 목록 가져오기 오류:', error);
    return res.status(500).json({ error: '서버 오류' });
  }
}

