import axios from 'axios';
import { SearchLocationResult } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function SearchLocationAPI({ lat, lng }: SearchLocationResult) {
  const datas = await axios
    .get(`${BASE_URL}tourist/${lat}/${lng}`)
    .then(res => res.data.list);
  return datas;
}
