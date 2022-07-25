import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './App';


const HomePage = lazy(() =>
  import('./components/HomePage/HomePage' /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);

const MovieDetailsPage = lazy(() =>
  import(
    './components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */
  )
);

const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const Cast = lazy(() => import('./components/Cast/Cast' /* webpackChunkName: "Cast" */));

const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
          </Route>

          {/* <Route path="*" element={<NotFoundView />} /> */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
 export default App;
