import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servise/api';
import { Author, Content, ItemReviews, WrapReviews } from './Reviews.styled';
import { Loading } from './Loader';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const data = await fetchReviews(movieId);
        console.log(movieId);
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  const showReviews = Array.isArray(reviews) && reviews.length;
  return (
    <>
      {isLoading && <Loading />}
      <WrapReviews>
        {showReviews
          ? reviews.map(({ id, author, content }) => {
              return (
                <ItemReviews key={id}>
                  <Author>Author: {author}</Author>
                  <Content>{content}</Content>
                </ItemReviews>
              );
            })
          : 'We dont have any for this movie'}
      </WrapReviews>
    </>
  );
}
