import { useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { getMovieDetails } from 'api/api';
import { TopWrapp, Img, List, BottomWrapp, Links } from './MovieDetails.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const location = useLocation();
  const detailsLink = location.state?.from ?? '/';

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovieDetails(id).then(res => setMovie(res.data));
  }, [id]);

  const {
    poster_path,
    original_title,
    title,
    vote_average,
    overview,
    genres,
    release_date,
  } = movie;

  return (
    <>
      <Link
        to={detailsLink}
        state={{ from: location }}
        style={{ marginLeft: '30px' }}
      >
        Go back
      </Link>
      <TopWrapp>
        <div style={{ marginLeft: '30px' }}>
          <Img
            src={
              poster_path
                ? imageUrl + poster_path
                : 'https://svgsilh.com/svg_v2/1363011.svg'
            }
            alt={title}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <h2>
            {original_title} <span>({release_date})</span>
          </h2>
          <p style={{ marginTop: '10px' }}>
            User Score: {Math.round(vote_average * 10)}%
          </p>
          <h2>Overview</h2>
          <p style={{ marginTop: '10px' }}>{overview}</p>
          <h2>Genres</h2>
          {genres && (
            <List>
              {genres.map(gener => (
                <li key={gener.id}>{gener.name}</li>
              ))}
            </List>
          )}
        </div>
      </TopWrapp>
      <BottomWrapp>
        <h2>Additional information:</h2>
        <ul style={{ marginTop: '10px', marginBottom: '20px' }}>
          <li>
            <Links to={'cast'}>Cast</Links>
          </li>
          <li>
            <Links to={'reviews'}>Reviews</Links>
          </li>
        </ul>
      </BottomWrapp>
      <Outlet />
    </>
  );
};

export default MovieDetails;
