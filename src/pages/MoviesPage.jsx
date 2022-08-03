import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchForm/SearchForm';
import { fetchByQuery } from 'services/api';
import MovieList from 'components/TrendingMovies/MovieList';
import PageHeading from 'components/PageHeading/PageHeading';
import Container from 'components/Container/Container';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const searchRequest = searchParams.get('query');

  useEffect(() => {
    if (!searchRequest) {
      return;
    }

    const fetchMovie = () => {
      setLoading(true);
      fetchByQuery(searchRequest)
        .then(results => {
          if (!results.length) {
            alert('No movies found!');
          }

          setMovies(results);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(setLoading(false));
    };
    fetchMovie();
  }, [searchRequest]);

  // onSubmit
  function onSubmit(value) {
    setSearchParams({ query: `${value}` });
  }

  return (
    <>
    <Container>
        <PageHeading text={'Movie Search'} />
        {/* <h1>Movies search</h1> */}
        {loading && 'Loading ...'}
        {error && <div>{error}</div>}

        <SearchBar onSearch={onSubmit} />
        {movies && <MovieList movies={movies} prevLocation={location} />}
        </Container>
    </>
  );
};

export default MoviesPage;