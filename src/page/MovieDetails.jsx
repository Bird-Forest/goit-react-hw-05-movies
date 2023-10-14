import React from 'react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'servise/api';
import {
  Poster,
  Score,
  TextDetails,
  TitleDetails,
  TitleFilm,
  WrapFilm,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});
  // const [id, setId] = useState(null);
  // const [poster, setPoster] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [release, setRelease] = useState(null);
  // const [score, setScore] = useState(null);
  // const [overview, setOverview] = useState(null);
  // const [genres, setGenres] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const getMovieDetails = async () => {
      try {
        //  setIsLoading(true);
        const data = await fetchMovieDetails(movieId);
        console.log(movieId);
        console.log(data);
        setFilm(data);
        // setId(data.id);
        // setPoster(data.backdrop_path);
        // setTitle(data.title);
        // setRelease(data.release_date);
        // setScore(data.vote_average);
        // setOverview(data.overview);
        // setGenres(data.genres);
      } catch (error) {
        error(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <WrapFilm key={nanoid()} id={film.id}>
      <Poster key={nanoid()} src={film.backdrop_path} alt="poster" />
      <TitleFilm key={nanoid()}>
        {film.title} {film.release_date}
      </TitleFilm>
      <Score key={nanoid()}>User Score: {film.vote_average}'0 %'</Score>
      <TitleDetails>Overview</TitleDetails>
      <TextDetails key={nanoid()}>{film.overview}</TextDetails>
      <TitleDetails>Genres</TitleDetails>
      <TextDetails key={nanoid()}>{film.genres}</TextDetails>
    </WrapFilm>
  );
}

// { id, backdrop_path, title, release_date, vote_average, overview, genres }

// <WrapPlus>
//   <TitleDetails>Additional information</TitleDetails>
