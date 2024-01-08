import axios from "axios";


export const getTodos = async () => {
  try {
    const response = await axios.get('/api/getTodos');
    return response.data; // 할 일 목록 반환
  } catch (error) {
    console.error('API 호출 오류 getTodos:', error);
    throw error; // 오류를 다시 던져서 처리 가능
  }
};


export const delTodo = async (id) => {
  try {
    const response = await axios.delete('/api/deleteTodo', { data: { id } });
    return response.data;
  } catch (error) {
    console.error('API 호출 오류 /scr/api/delTodo:', error);
    throw error;
  }
};

export const addTodo = async (todo) => {
  try {
    const response = await axios.post('/api/addTodo', { data: { todo } });
    return response.data;
  } catch (error) {
    console.error('API 호출 오류 /scr/api/addTodo:', error);
    throw error;
  }
};
/* 
 ### 항목 수정

 특정 할 일 항목을 수정합니다.


```ts
interface RequestBody {
  title: string; // 할 일 제목 (필수!)
  done: boolean; // 할 일 완료 여부 (필수!)
  order?: number; // 할 일 순서
}
```

  ```json
{
  "title": "Bootstrap 스타일 추가",
  "done": false,
  "order": 2
}
``` */

export const putTodo = async (todo) => {
  try {
    const response = await axios.put('/api/putTodo', { data: { todo } });
    return response.data;
  } catch (error) {
    console.error('API 호출 오류 /scr/api/putTodo:', error);
    throw error;
  }
};
