/* eslint-disable max-len */

import { MovieCard } from '../MovieCard';
import './MovieList.scss';

export const MovieList = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies &&
        movies.map(movie => <MovieCard movie={movie} key={movie.imdbId} />)}
    </div>
  );
};
