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
    console.log('api_first');
    const response = await axios.delete(`/api/deleteTodo/${id}`); // 'get'을 'delete'로 변경
    return response.data;
  } catch (error) {
    console.error('API 호출 오류 delTodo:', error);
    if (error.response) {
      console.error('응답 상태:', error.response.status);
      console.error('응답 데이터:', error.response.data);
    }
    throw error;
  }
};


delTodo("01mhb0JC0tIPGv0ULnH1");
