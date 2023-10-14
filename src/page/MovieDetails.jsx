import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servise/api';

export default function MovieDetails() {
  const { movieId } = useParams();

  const [film, setFilm] = useState({});

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        //  setIsLoading(true);
        const data = await fetchMovieDetails(movieId);
        console.log(movieId);
        setFilm(data);
        console.log(data);
      } catch (error) {
        error(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div key={film.id} id={film.id}>
      <img src={film.poster_path} alt={film.title} />
      <h2>
        {film.title} {film.release_date}
      </h2>
      <p>User Score: film.{film.vote_average}'%'</p>
      <h3>Overview</h3>
      <p>{film.overview}</p>
      <h3>Genres</h3>
      <p>data.{film.genres}</p>
      <h3>Additional information</h3>
      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
    </div>
  );
}
