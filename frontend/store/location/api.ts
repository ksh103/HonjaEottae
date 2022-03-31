import axios from 'axios';
import { SearchLocationResult } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export async function SearchLocationAPI({ lat, lng }: SearchLocationResult) {
  const datas = await axios
    .get(`${BASE_URL}tourist/${lat}/${lng}`)
    .then(res => res.data.list);
  const result = datas.map((data: any) => {
    return {
      touristId: data.touristId,
      image: data.touristImgPath.map((imageData: any) => {
        if (imageData.fileId == 0) {
          return {
            image:
              'https://newsimg.hankookilbo.com/cms/articlerelease/2021/10/11/7d43baac-4f90-4ed8-9553-9cf488b2eff9.jpg',
          };
        } else {
          return {
            image: `${IMAGE_URL}${imageData.fileId}/${imageData.touristId}`,
          };
        }
      }),
      touristLat: data.touristLat,
      touristLng: data.touristLng,
      touristName: data.touristName,
      touristSummary: data.touristSummary,
    };
  });
  return result;
}
