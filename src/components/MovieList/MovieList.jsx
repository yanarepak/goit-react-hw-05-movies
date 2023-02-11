import {useLocation} from "react-router-dom";
import {List, Link} from './MovieList.styled'

const MovieList = ({ movies }) => {
const location = useLocation();
// console.log(location)

  return (
    <List>
      {movies.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from: location}}>{title}</Link>
          </li>
        );
      })}
    </List>
  );
};

export default MovieList;
