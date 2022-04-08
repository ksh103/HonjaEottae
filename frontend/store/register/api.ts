import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export async function searchTourlistAPI(keyword: string) {
  const datas = await axios
    .get(`${BASE_URL}tourist/${keyword}?page=1&size=100`)
    .then(res => res.data.list.content);
  const result = datas.map((data: any) => {
    if (data.fileId == 0) {
      return {
        id: data.touristId,
        title: data.touristName,
        image: 'images/no_image.jpg',
      };
    } else {
      return {
        id: data.touristId,
        title: data.touristName,
        image: `${IMAGE_URL}${data.fileId}/${data.touristId}`,
      };
    }
  });
  return result;
}

export async function courseRegisterAPI(payload: any) {
  const datas = await axios.post(`${BASE_URL}course`, payload);
  return datas;
}
