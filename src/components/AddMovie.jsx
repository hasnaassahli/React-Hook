const movies = [
  {
    title: "Dune: Part Two",
    description: "Paul Atreides unites with the Fremen to avenge his family.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Dune_Part_Two_poster.jpg/220px-Dune_Part_Two_poster.jpg",
    rating: 8.7
  },
  {
    title: "Avatar: The Way of Water",
    description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/2/20/Avatar_The_Way_of_Water_poster.jpg",
    rating: 7.9
  },
  {
    title: "Oppenheimer",
    description: "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/7/7f/Oppenheimer_%28film%29.jpg",
    rating: 8.5
  },
  {
    title: "John Wick: Chapter 4",
    description: "John Wick uncovers a path to defeating The High Table.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/6/60/John_Wick_-_Chapter_4_promotional_poster.jpg",
    rating: 8.2
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    description: "Miles Morales goes on an adventure across the multiverse.",
    posterURL: "https://upload.wikimedia.org/wikipedia/en/d/d3/Spider-Man_Across_the_Spider-Verse_poster.jpg",
    rating: 8.9
  }
];

const MovieList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {movies.map((movie, index) => (
        <div
          key={index}
          style={{
            width: '200px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '10px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <img
            src={movie.posterURL}
            alt={movie.title}
            style={{ width: '100%', borderRadius: '8px', height: '300px', objectFit: 'cover' }}
          />
          <h3 style={{ margin: '10px 0 5px' }}>{movie.title}</h3>
          <p style={{ fontSize: '0.9em', color: '#555' }}>{movie.description}</p>
          <p style={{ fontWeight: 'bold', marginTop: '5px' }}>⭐ {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

