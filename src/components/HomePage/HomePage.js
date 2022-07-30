import { useEffect, useState } from 'react';
import PageHeading from 'components/PageРeading/PageHeading';
import MovieList from 'components/TrendingMovies/MovieList';

import { getMovies } from 'services/api';
// import NotFoundView from 'ui/NotFoundView';

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [query, setQuery] = useState('');

  // const onLoadBtnClick = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      getMovies()
        .then(results => {
          setMovies(results);
          // setMovies(prevState => [...prevState, ...results]);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  // const handleFormSubmit = () => {
  //   setQuery(query);
  //   setPage(1);
  //   setMovies([0]);
  // };
  // const isNotFound = !loading && !movies.length;
  return (
    <>
        <PageHeading text={'Trending Movies'}></PageHeading>
        {/* <SearchBar onSubmit={handleFormSubmit} /> */}
        {loading && 'Loading ...'}
        {/* {isNotFound && <NotFoundView />} */}
        {error && <div>{error}</div>}
        {movies && <MovieList movies={movies} />}

    </>
  );
}