import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="border p-2 rounded shadow">
      <img src={movie.posterURL} alt={movie.title} className="w-full h-64 object-cover" />
      <h3 className="text-lg font-bold mt-2">{movie.title}</h3>
      <p>⭐ {movie.rating}</p>
      <Link to={`/movie/${movie.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;

