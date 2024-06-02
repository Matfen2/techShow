import { useState, useEffect } from 'react';

function BlockBuster() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  };

  return (
    <div>
      <h2>BlockBuster</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie._id}>
            {movie.title} - {movie.creator} - {movie.studio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlockBuster;
