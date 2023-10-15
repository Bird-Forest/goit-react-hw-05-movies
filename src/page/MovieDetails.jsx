import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servise/api';
import {
  Genre,
  Poster,
  Score,
  TextDetails,
  TitleDetails,
  TitleFilm,
  WrapFilm,
  WrapInfo,
  WrapPlus,
  WrappGeners,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const getMovieDetails = async () => {
      try {
        //  setIsLoading(true);
        const data = await fetchMovieDetails(movieId);
        console.log(movieId);
        console.log(data);
        setFilm(data);
      } catch (error) {
        error(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!film) return;
  console.log(film);
  return (
    <WrapFilm id={film.id}>
      <Poster
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        alt="poster"
      />
      <WrapInfo>
        <TitleFilm>
          {film.title} {film.release_date}
        </TitleFilm>
        <Score>User Score: {film.vote_average}'0 %'</Score>
        <TitleDetails>Overview</TitleDetails>
        <TextDetails>{film.overview}</TextDetails>
        <TitleDetails>Genres</TitleDetails>
        <WrappGeners>
          {film.genres.map(({ id, name }) => {
            return <Genre key={id}>{name}</Genre>;
          })}
        </WrappGeners>
      </WrapInfo>
      <WrapPlus>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </WrapPlus>
    </WrapFilm>
  );
}
