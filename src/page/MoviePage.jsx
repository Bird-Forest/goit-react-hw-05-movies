import React, { useEffect, useState } from 'react';
import { BsFillCameraReelsFill } from 'react-icons/bs';
import {
  BtnSearch,
  FormSearch,
  InputSearch,
  ListMovieByName,
  MovieByName,
  TitleMovie,
  WrapMoviePage,
} from './MoviePage.styled';
import { fetchFindMovie } from 'servise/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Loading } from 'components/Loader';

export default function MoviePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [listByName, setListByName] = useState(null);

  useEffect(() => {
    if (!query) return;
    const getMovieBySearch = async () => {
      try {
        setIsLoading(true);
        const data = await fetchFindMovie(query);
        setListByName(data.results);
        // console.log(data.results);
      } catch (error) {
        error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieBySearch();
  }, [query]);

  const selectedSearch = event => {
    event.preventDefault();
    const wordValue = event.currentTarget.elements.word.value;
    setSearchParams({ query: wordValue });
    event.currentTarget.reset();
  };
  const showList = Array.isArray(listByName) && listByName.length;
  return (
    <WrapMoviePage>
      <FormSearch onSubmit={selectedSearch}>
        <InputSearch
          type="text"
          autoComplete="off"
          autoFocus
          name="word"
          placeholder="Search..."
        />
        <BtnSearch type="submit">
          <BsFillCameraReelsFill className="icon" />
        </BtnSearch>
      </FormSearch>
      {isLoading && <Loading />}
      <ListMovieByName>
        {showList &&
          listByName.map(({ id, title }) => {
            return (
              <MovieByName key={id}>
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  <TitleMovie>{title}</TitleMovie>
                </Link>
              </MovieByName>
            );
          })}
      </ListMovieByName>
    </WrapMoviePage>
  );
}
