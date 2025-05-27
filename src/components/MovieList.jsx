import React, { useState } from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import AddMovie from './AddMovie';

function MovieList({ movies, setMovies }) {
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Movie App</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <AddMovie setMovies={setMovies} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
