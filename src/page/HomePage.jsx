import React, { useEffect, useState } from 'react';
import {
  ListPopularMovies,
  PopularMovie,
  TitleHomePage,
  TitlePopMovie,
  WrapHomePage,
} from './HomePage.styled';
import { fetchMovies } from 'servise/api';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [trendList, setTrendList] = useState(null);
  useEffect(() => {
    getTrandingMovies();
    // console.log('useEffect componentDidMount');
    return () => {
      // console.log('useEffect componentWillUnmount');
    };
  }, []);
  const getTrandingMovies = async () => {
    try {
      //  setIsLoading(true);
      const data = await fetchMovies();
      // console.log(data);
      setTrendList(data.results);
    } catch (error) {
      // setError(error.message);
    } finally {
      // setIsLoading(false);
    }
  };

  const showList = Array.isArray(trendList) && trendList.length;
  return (
    <WrapHomePage>
      <TitleHomePage>Trending today</TitleHomePage>
      <ListPopularMovies>
        {showList &&
          trendList.map(({ id, title }) => {
            return (
              <PopularMovie key={id}>
                <Link to={`/movies/${id}`}>
                  <TitlePopMovie>{title}</TitlePopMovie>
                </Link>
              </PopularMovie>
            );
          })}
      </ListPopularMovies>
    </WrapHomePage>
  );
}
