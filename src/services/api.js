import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd2088e493093cc1b7e7b50d5b735bf4d';


export async function requestTrendingMovies(page = 1) {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}&language=ru-RU&include_image_language=en`,
  );
  return data;
}
