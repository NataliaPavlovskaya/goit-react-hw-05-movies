import { useEffect, useState } from 'react';

import PageHeading from 'components/PageHeading/PageHeading';
import MovieList from 'components/TrendingMovies/MovieList';
import Container from 'components/Container/Container';

import { getMovies } from 'services/api';

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
    <Container>
        <PageHeading text={'Trending Movies'}></PageHeading>       
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        {movies && <MovieList movies={movies} />}
    </Container>
    </>
  );
}