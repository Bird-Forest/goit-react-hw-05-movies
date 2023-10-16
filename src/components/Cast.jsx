import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'servise/api';
import {
  ActorName,
  Character,
  ItemCast,
  Profile,
  WrapCast,
} from './Cast.styled';
import { Loading } from './Loader';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    const getCast = async () => {
      try {
        setIsLoading(true);
        const data = await fetchCredits(movieId);
        console.log(movieId);
        console.log(data.cast);
        setCast(data.cast);
      } catch (error) {
        error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);
  if (!cast) return;

  const showCast = Array.isArray(cast) && cast.length;
  return (
    <>
      <WrapCast>
        {showCast &&
          cast.map(({ id, profile_path, name, character }) => {
            return (
              <ItemCast key={id}>
                <Profile
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <ActorName>{name}</ActorName>
                <Character>{character}</Character>
              </ItemCast>
            );
          })}
        {isLoading && <Loading />}
      </WrapCast>
    </>
  );
}
