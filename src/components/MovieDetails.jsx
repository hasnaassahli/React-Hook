import React from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <div>Movie not found.</div>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
      <p className="mb-2">{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title={movie.title}
        allowFullScreen
        className="mb-4"
      ></iframe>
      <br />
      <Link to="/" className="text-blue-600 underline">Back to Home</Link>
    </div>
  );
}

export default MovieDetails;
