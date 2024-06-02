const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Movies = require('./models/movies');  // Assurez-vous que le chemin est correct

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/testDb';

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Connection success with database');
  })
  .catch((error) => {
    console.error('Error of connection with database', error);
  });

app.get('/', (req, res) => {
  res.send('Hello Everyone');
});

// CRUD operations for Movies

// GET all movies
app.get('/movies', (req, res) => {
  Movies.find()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error fetching movies', error });
    });
});

// POST a new movie
app.post('/movies', (req, res) => {
  Movies.create(req.body)
    .then((movie) => {
      res.status(201).json(movie);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error creating movie', error });
    });
});

// PUT (update) a movie by id
app.put('/movies/:id', (req, res) => {
  Movies.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.status(200).json(movie);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error updating movie', error });
    });
});

// DELETE a movie by id
app.delete('/movies/:id', (req, res) => {
  Movies.findByIdAndDelete(req.params.id)
    .then((movie) => {
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.status(200).json({ message: 'Movie deleted successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error deleting movie', error });
    });
});

app.listen(PORT, () => {
  console.log('Connection listening on port server ' + PORT);
});
