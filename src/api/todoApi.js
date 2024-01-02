import axios from "axios";


export const getTodos = async () => {
  try {
    const response = await axios.get('/api/getTodos');
    return response.data; // 할 일 목록 반환
  } catch (error) {
    console.error('API 호출 오류:', error);
    throw error; // 오류를 다시 던져서 처리 가능
  }
};
