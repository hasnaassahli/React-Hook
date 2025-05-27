import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import './App.css'; 
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through dream-sharing tech.',
      posterURL: 'https://m.media-amazon.com/images/I/51s+ZuvtGOL._AC_.jpg',
      rating: 4.8,
      trailerURL: 'https://www.youtube.com/embed/YoHD9XEInc0',
    },
     {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing tech.",
    posterURL: "https://i.imgur.com/8UG2Yfz.jpg",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 2,
    title: "Interstellar",
    description: "A team travels through a wormhole in space.",
    posterURL: "https://i.imgur.com/2TeJfOJ.jpg",
    rating: 8.6,
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
    {
        id: 3,
        title: "The Dark Knight",
        description: "Batman faces the Joker in Gotham City.",
        posterURL: "https://i.imgur.com/1hZ8j0H.jpg",
        rating: 9.0,
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    },
    {
        id: 4,
        title: "Parasite",
        description: "A poor family schemes to become employed by a wealthy family.",
        posterURL: "https://i.imgur.com/5h7z2bK.jpg",
        rating: 8.6,
        trailer: "https://www.youtube.com/embed/5xH0HfJHsaY"
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} setMovies={setMovies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
