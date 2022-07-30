import axios from 'axios';


const API_KEY = 'd2088e493093cc1b7e7b50d5b735bf4d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/get-trending',
  querySearch: '/search/movie',
  movieDetails: '/movie', //movie/{movie_id}
  movieCredits: '/credits', ///movie/{movie_id}/credits
  movieReviews: '/reviews', ///movie/{movie_id}/reviews
};

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
  );
  // console.log(res.data.results);
  return res.data.results;
};

//  https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export const fetchByQuery = async (query, page = 1) => {
  const res = await axios.get(
    `${END_POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );

  return res.data.results;
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const fetchMoviesDetails = async id => {
  const res = await axios.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );

  return res.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export const fetchMoviesCredits = async id => {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );

  return res.data.cast;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export const fetchMoviesReviews = async (id, page = 1) => {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  return res.data.results;
};

