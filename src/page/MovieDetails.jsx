import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from 'servise/api';
import {
  Genre,
  Poster,
  Score,
  TextOverview,
  TitleFilm,
  TitleGenres,
  TitleOverview,
  WrapFilm,
  WrapInfo,
  WrapLinkPlus,
  WrapPic,
  WrapPlus,
  WrappGeners,
} from './MovieDetails.styled';
import { Loading } from 'components/Loader';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const backHref = useRef(location.state?.from ?? '/');
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const getMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieDetails(movieId);
        console.log(movieId);
        console.log(data);
        setFilm(data);
      } catch (error) {
        error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  if (!film) return;
  console.log(film);
  return (
    <WrapFilm id={film.id}>
      <WrapPic>
        <Link to={backHref.current} className="back">
          Go Back
        </Link>
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
          alt="poster"
        />
      </WrapPic>

      <WrapInfo>
        <TitleFilm>
          {film.title} {new Date(film.release_date).getFullYear()}
        </TitleFilm>
        <Score>User Score: {Math.ceil(film.vote_average * 10)}%</Score>
        <TitleOverview>Overview</TitleOverview>
        <TextOverview>{film.overview}</TextOverview>
        <TitleGenres>Genres</TitleGenres>
        <WrappGeners>
          {film.genres.map(({ id, name }) => {
            return <Genre key={id}>{name}</Genre>;
          })}
        </WrappGeners>
      </WrapInfo>

      <WrapPlus>
        <WrapLinkPlus>
          <NavLink className="navigate" to="cast">
            Cast
          </NavLink>
          <NavLink className="navigate" to="reviews">
            Reviews
          </NavLink>
        </WrapLinkPlus>
        <Outlet />
      </WrapPlus>

      {isLoading && <Loading />}
    </WrapFilm>
  );
}
