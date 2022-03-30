import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function searchTourlistAPI(keyword: string) {
  const datas = await axios
    .get(`${BASE_URL}tourist/${keyword}?page=1&size=100`)
    .then(res => res.data.list.content);
  const result = datas.map((data: any) => {
    return { id: data.touristId, title: data.touristName };
  });
  return result;
}

export async function courseRegisterAPI(payload: any) {
  console.log('api 호출');
  const datas = await axios.post(`${BASE_URL}course`, payload);
  return datas;
}
