import React, { useState } from 'react';
import './App.css';

function App() {
  // Initial movie list
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A dream within a dream.',
      posterURL: 'https://m.media-amazon.com/images/I/51cbw6cM5HL._AC_.jpg',
      rating: 9
    },
    {
      title: 'Titanic',
      description: 'A love story on the ill-fated ship.',
      posterURL: 'https://m.media-amazon.com/images/I/71rNJQ2g-EL._AC_SY679_.jpg',
      rating: 8
    }
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: ''
  });

  // Filter movies
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  // Handle form input
  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  // Add new movie
  const handleAddMovie = (e) => {
    e.preventDefault();
    const movieToAdd = {
      ...newMovie,
      rating: Number(newMovie.rating)
    };
    setMovies([...movies, movieToAdd]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🎥 My Movie App</h1>

      {/* Filter Section */}
      <h2>🔎 Filter</h2>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Min rating"
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />

      {/* Add Movie Form */}
      <h2>➕ Add a Movie</h2>
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newMovie.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="posterURL"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleInputChange}
        />
        <button type="submit">Add Movie</button>
      </form>

      {/* Movie List */}
      <h2>🎬 Movie List</h2>
      <div  className='App' >
        {filteredMovies.map((movie, index) => (
          <div  key={index} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={movie.posterURL} alt={movie.title} width="100%" />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>⭐ Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

