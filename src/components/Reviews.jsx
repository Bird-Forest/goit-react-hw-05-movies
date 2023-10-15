import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'servise/api';
import { Author, Content, ItemReviews, WrapReviews } from './Reviews.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    if (!movieId) return;
    const getReviews = async () => {
      try {
        //  setIsLoading(true);
        const data = await fetchReviews(movieId);
        console.log(movieId);
        console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        error(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
  const showArr = Array.isArray(reviews) && reviews.length;
  return (
    <>
      <WrapReviews>
        {showArr
          ? reviews.map(({ author, content }) => {
              return (
                <ItemReviews>
                  <Author>Author: {author}</Author>
                  <Content>{content}</Content>
                </ItemReviews>
              );
            })
          : 'Opps'}
      </WrapReviews>
    </>
  );
}
// author;
// content;
