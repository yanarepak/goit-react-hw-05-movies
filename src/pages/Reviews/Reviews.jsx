import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'api/api';
import { List } from './Reviews.styled';

const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(response => setReviews(response.data.results));
  }, [id]);

  return (
    <List>
      {reviews.map(({ id, content, author }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </List>
  );
};

export default Review;
