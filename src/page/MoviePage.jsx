import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

export default function MoviePage() {
  const [word, setWord] = useState('');
  const [listByName, setListByName] = useState(null);

  const getMovieBySearch = async () => {
    try {
      //  setIsLoading(true);
      const data = await fetchFindMovie(word);
      setListByName(data.results);
      console.log(data.results);
    } catch (error) {
      error(error.message);
    } finally {
      // setIsLoading(false);
    }
  };

  const selectedSearch = event => {
    event.preventDefault();
    let choosedWord = word;
    console.log(choosedWord);
    getMovieBySearch(choosedWord);

    setWord('');
  };
  const showList = Array.isArray(listByName) && listByName.length;
  return (
    <WrapMoviePage>
      <FormSearch onSubmit={selectedSearch}>
        <InputSearch
          type="text"
          autoComplete="off"
          autoFocus
          value={word}
          placeholder="Search..."
          onChange={event => setWord(event.target.value)}
        />
        <BtnSearch type="submit">
          <BsFillCameraReelsFill className="icon" />
        </BtnSearch>
      </FormSearch>

      <ListMovieByName>
        {showList &&
          listByName.map(({ id, title }) => {
            return (
              <MovieByName key={id}>
                <Link to={`/movies/${id}`}>
                  <TitleMovie>{title}</TitleMovie>
                </Link>
              </MovieByName>
            );
          })}
      </ListMovieByName>
    </WrapMoviePage>
  );
}
