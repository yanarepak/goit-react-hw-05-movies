import { useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'api/api';
import { List } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getMovieCredits(id).then(response => setActors(response.data.cast));
  }, [id]);

  const imageUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <>
      <List>
        {actors.map(({ cast_id, profile_path, name, original_name, character }) => (
          <li key={cast_id          }>
            <img
              src={
                profile_path
                  ? imageUrl + profile_path
                  : 'https://svgsilh.com/svg_v2/1363011.svg'
              }
              alt={name}
              width="120px"
            />
            <div>
              <h2>{original_name || name}</h2>
              <p>{character}</p>
            </div>
          </li>
        ))}
      </List>
    </>
  );
};

export default Cast;
